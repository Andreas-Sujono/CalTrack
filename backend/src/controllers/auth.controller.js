const jwt = require('jsonwebtoken');
const fs = require('fs');

const UserAccount = require('../models/user/userAccount.model.js');
const UserProfile = require('../models/user/userProfile.model.js');
const UserContact = require('../models/user/userContact.model.js');
const UserAddress = require('../models/user/userAddress.model.js');

const AppError = require('../utils/appError');

const publicKey = fs.existsSync('../../public.key') ? fs.readFileSync('../../public.key') : 
`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtaRayN9p3vH+C+i1wdCq3OVMz
yAGw81DkolxPhOuEhasjnaMtbC8tPMk4KwBAgSDXXcosSIQjKjCcxG5luE0MaI3y
IP4RjWsIk86o+HLSVCDFfe/rUMc5OaAT1HYoA/4wI7ymZ76FdoirczYPGawTeh0l
xgo8VSo7s43j4kPx/QIDAQAB
-----END PUBLIC KEY-----`
const privateKey = fs.existsSync('../../private.key') ? fs.readFileSync('../../private.key') : 
`-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCtaRayN9p3vH+C+i1wdCq3OVMzyAGw81DkolxPhOuEhasjnaMt
bC8tPMk4KwBAgSDXXcosSIQjKjCcxG5luE0MaI3yIP4RjWsIk86o+HLSVCDFfe/r
UMc5OaAT1HYoA/4wI7ymZ76FdoirczYPGawTeh0lxgo8VSo7s43j4kPx/QIDAQAB
AoGBAKct3zGl4zr4QT42jsQRWnUWEP6k3eyIRv6FANWw4ZX7gAhwGzbZS4ojRiKe
YjnNw6mdxCF5L9ru+7rHLV9nlO69mUZ77ugh4anGbrrA9n7gImg07OL1NRBOOFOo
K7LzzZEEiY288DbQfRwPdo9OWBIV411XfKE9Trr9W0QYiiTBAkEA8PhRuZ7O1p2q
Wx3+6l9Kjk0N+X87V4mxTkCWRMKmaLH1MJNIErrBHbx3G5IkjurspL90FMhD/mVv
V3e3hgyzCQJBALg6A+1PeX20jFansmk4YMJ1dnsTfRlWqX7UyDew3jlx7L3pI3EB
MOhYPXbzMsxELTggYKMTmTYadb+UzUxIgFUCQQDA3pBTGLgG8UUUDwskvkanZSdF
Rj/SDeR7dJiRypZ0/9L3ITszuoStb1aKG8vlFEV6i762j6BUcw3OHYUn5uw5AkBU
ZUd9RKZMfxS3cfWanFg/XV5cva3WmMvnLYVXdfAn8tfYnGA/GaOVHS9zObBwwV7R
0otSydyrW23LyVhPdPtNAkEArgvEssxyw40wBI/wVIDeXNKFC8o7zWB30ZEwXX2t
U+jQ5CBZAmhrkY0wzu8/IZnQ5a1wzgHMKcsaXRi/Gn+jNQ==
-----END RSA PRIVATE KEY-----`
const config = require('../../config')

const {errorMessages: commonErrorMessages} = require('../constants/general.constant')

const createToken = id =>
  jwt.sign(
    {
      id,
    },
    privateKey,
    config.signOptions()
  );
exports.createToken = id => createToken(id)

const decodeToken = token => 
  jwt.verify(token, publicKey, config.signOptions())
exports.decodeToken = token => decodeToken(token)


exports.login = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    // 1) check if email and password exist
    if (!username || !password) {
      return next(
        new AppError(400, 'error', commonErrorMessages.FIELD_EMPTY),
        req,
        res,
        next
      );
    }
    username = username.toLowerCase()
    
    const user = await UserAccount.findOne({
      username,
    }).select('+password');

    // if(!user){
    //   return next(
    //     new AppError(403, 'error', 'Account is not found'),
    //     req,
    //     res,
    //     next
    //   );
    // }

    // 2) check if user exist and password is correct
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(
        new AppError(401, 'error', commonErrorMessages.LOGIN_INVALID),
        req,
        res,
        next
      );
    }

    // 3) check if account has been activated
    if(user.firstUse){
      return next(
        new AppError(401, 'error',commonErrorMessages.ACCOUNT_HAS_NOT_ACTIVATED),
        req,
        res,
        next
      );
    }
    

    // 4) All correct, send jwt to client
    const token = createToken(user.id);

    // Remove the password from the output
    user.password = undefined;

    res.status(200).json({
      status: 'success',
      data: {
        token,
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.activate = async (req, res, next) => {
  try{
    let {email, dateOfBirth, nationalId, activationKey} = req.body
    if(!email || !dateOfBirth || !nationalId || !activationKey)
      return next(
        new AppError(400, 'error', commonErrorMessages.FIELD_EMPTY),
        req,
        res,
        next
      );
    email = email.toLowerCase()
    nationalId = nationalId.toLowerCase()
    const account = await UserAccount.findOne({email})
    const accountId = account.id

    const profile = await UserProfile.findOne({
      userIndex: accountId
    })
    if(profile.dateOfBirth !== dateOfBirth && profile.nationalId !== nationalId){
      return next(
        new AppError(401, 'error', commonErrorMessages.ACTIVATE_INVALID),
        req,
        res,
        next
      );
    }

    if(account.activationKey !== activationKey){
      return next(
        new AppError(401, 'error', commonErrorMessages.WRONG_ACTIVATION_KEY),
        req,
        res,
        next
      );
    }

    if(!account.firstUse){
      return next(
        new AppError(400, 'error', commonErrorMessages.ACTIVATED_ALREADY),
        req,
        res,
        next
      );
    }

    const updatedAccount = await UserAccount.findByIdAndUpdate(accountId, {firstUse:false}, {new: true})
    const token = createToken(updatedAccount.id);

    res.status(200).json({
      status: 'success',
      data:{
        token: token,
        account: updatedAccount
      }
    });

  } catch (err){
    next(err);
  }
}


exports.protect = async (req, res, next) => {
  try {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer')) {
      token = authorization.split(' ')[1];
    }

    // 1) check if the token is there
    if (!token) {
      return next(
        new AppError(
          401,
          'error',
          commonErrorMessages.NOT_LOGGED_IN
        ),
        req,
        res,
        next
      );
    }

    // 2) Verify token
    const decode = decodeToken(token) //if not verified, will throw error automatically

    const accountId = decode.id 

    const userProfile = await UserProfile.findOne({userIndex:accountId})
    const profileId = userProfile ? userProfile.id : null

    const userContact = await UserContact.findOne({userProfileIndex:profileId})
    const contactId = userContact ? userContact.id : null

    const userAddress = await UserAddress.findOne({userProfileIndex:profileId})
    const addressId = userAddress ? userAddress.id : null

    req.accountId = accountId;
    req.profileId = profileId;
    req.contactId = contactId;
    req.addressId = addressId;

    next();
  } catch (err) {
    next(err);
  }
};

// Authorization check if the user have rights to do this action
// exports.restrictTo = (...roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return next(
//       new AppError(403, 'error', 'You are not allowed to do this action'),
//       req,
//       res,
//       next
//     );
//   }
//   next();
// };