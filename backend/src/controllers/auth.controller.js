const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path')

const UserAccount = require('../models/userAccount.model.js');
const UserDetails = require('../models/userDetails.model.js');

const AppError = require('../utils/appError');

const publicKey =  fs.readFileSync(path.join(__dirname, 'public.key')) 
const privateKey = fs.readFileSync(path.join(__dirname, 'private.key')) 
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

    console.log(username, password)

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

    if(!user){
      return next(
        new AppError(401, 'error', commonErrorMessages.LOGIN_INVALID),
        req,
        res,
        next
      );
    }

    // 2) check if user exist and password is correct
    console.log(await user.correctPassword(password, user.password))
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(
        new AppError(401, 'error', commonErrorMessages.LOGIN_INVALID),
        req,
        res,
        next
      );
    }

    // 3) All correct, send jwt to client
    const token = createToken(user.id);

    // Remove the password from the output
    user.password = undefined;

    const userDetails = await UserDetails.findOne({accountId: user.id})

    res.status(200).json({
      status: 'success',
      data: {
        token,
        userAccount: user,
        userDetails
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try{
    let {fullName, email, username, password} = req.body
    if(!fullName || !email || !username || !password)
      return next(
        new AppError(400, 'error', commonErrorMessages.FIELD_EMPTY),
        req,
        res,
        next
      );
    email = email.toLowerCase()

    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const userAccount = await UserAccount.create({ fullName, email, username, password:hashedPassword })
    const userDetails = await UserDetails.create({accountId: userAccount.id})

    const token = createToken(userAccount.id);

    res.status(200).json({
      status: 'success',
      data:{
        token: token,
        userAccount: userAccount,
        userDetails: userDetails
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

    const userDetails = await UserDetails.findOne({accountId})
    const userDetailsId = userDetails ? userDetails._id : null

    req.accountId = accountId;
    req.userDetailsId = userDetailsId;

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