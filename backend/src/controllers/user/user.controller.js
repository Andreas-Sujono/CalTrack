const bcrypt = require('bcryptjs');
var generator = require('generate-serial-number');
var nodemailer = require('nodemailer')

const base = require('../base.controller');
const auth = require('../auth.controller.js');
const AppError = require('../../utils/appError');

const UserAccount = require('../../models/user/userAccount.model.js');
const UserProfile = require('../../models/user/userProfile.model.js');
const UserContact = require('../../models/user/userContact.model.js');
const UserAddress = require('../../models/user/userAddress.model.js');

const {errorMessages: commonErrorMessages} = require('../../constants/general.constant')
const {errorMessages} = require('../../constants/user/user.constant')


exports.createAccount = async (req, res, next) => {
  try{
    //required: username, email, password, activationKey
    const account = await UserAccount.create({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 12)
    });
    if(!account)
      return next(
        new AppError(400, 'error', errorMessages.CREATE_ACCOUNT_ERROR),
        req,
        res,
        next
      );
    const accountId = account.id
    const profile = await UserProfile.create({userIndex: accountId});
    const profileId = profile.id
    const contact = await UserContact.create({userProfileIndex: profileId})
    const address = await UserAddress.create({userProfileIndex: profileId})

    if(account && profile && contact && address){
      res.status(200).json({
        status: 'success',
        data: {
          account,
          token: auth.createToken(accountId)
        },
      });
    }
    else{
      return next(
        new AppError(500, 'error', errorMessages.CREATE_ACCOUNT_DETAIL_ERROR),
        req,
        res,
        next
      );
    }

  } catch (error) {
    next(error);
  }
}


// need to be more secure later
exports.resetPassword = async (req, res, next) => {
  try{
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const token = req.body.token

    if( !password || !confirmPassword || !token){
      return next(
        new AppError(400, 'error', commonErrorMessages.FIELD_EMPTY),
        req,
        res,
        next
      );
    }

    if( password !== confirmPassword){
      return next(
        new AppError(400, 'error', errorMessages.PASSWORD_NOT_MATCHED),
        req,
        res,
        next
      );
    }

    if (!token) {
      return next(
        new AppError(
          401,
          'error',
          commonErrorMessages.NOT_AUTHORIZED
        ),
        req,
        res,
        next
      );
    }

    //Verify token
    const decode = auth.decodeToken(token)

    await UserAccount.findByIdAndUpdate(decode.id, {password: await bcrypt.hash(confirmPassword, 12)})

    res.status(200).json({
      status: 'success',
      data: null,
    });

  } catch (error) {
    next(error);
  }
}

exports.forgotPassword = async (req, res, next) => {
  try{
    const OTP = generator.generate(4);
    const email = req.body.email
    
    const user = await UserAccount.findOne({
      email,
    })

    if(!user){
      return next(
        new AppError(
          404,
          'error',
          commonErrorMessages.NOT_FOUND
        ),
        req,
        res,
        next
      );
    }

    if(user.firstUse){
      return next(
        new AppError(
          400,
          'error',
          commonErrorMessages.ACCOUNT_HAS_NOT_ACTIVATED
        ),
        req,
        res,
        next
      );
    }

    const result = await sendEmail({
      key:OTP,
      email
    })

    const expired_time = 3600000 //in ms, (1 hour)
    const nowDate = new Date()
    
    const OTP_expired_time = new Date(nowDate.getTime() + expired_time)

    if(result){
      await UserAccount.findOneAndUpdate({email}, {OTP: await bcrypt.hash(OTP, 12), OTP_expired_time})
      return res.status(200).json({
        status: 'success',
        data: {
          OTP_expired_time: OTP_expired_time.toString(),
          token: auth.createToken(user.id)
        },
      });
    }
    
    return next(
      new AppError(
        500,
        'error',
        errorMessages.SEND_OTP_ERROR
      ),
      req,
      res,
      next
    );

  } catch (error) {
    next(error);
  }
}

// used send an OTP password
const sendEmail = async ( data ) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
           user: process.env.EMAIL_SENDER,
           pass: process.env.PASSWORD_SENDER
       }
  });

  const mailOptions = {
    from: 'PIN.demosg@gmail.com', // sender address
    to: data.email, // list of receivers
    subject: 'OTP to reset password', // Subject line
    html: `
      <h1> Welcome to our app</h1>
      <p> OTP: <b>${data.key}</b> </p>
      <p> don't share this code to anyone </p>
      <p> The OTP will expired in 1 hour </p>
    `
  };

  return await transporter.sendMail(mailOptions);

}

exports.validateOTP = async (req,res,next) => {
  try{
    const email = req.body.email
    const OTP = req.body.OTP

    if( !email || !OTP){
      return next(
        new AppError(400, 'error', commonErrorMessages.FIELD_EMPTY),
        req,
        res,
        next
      );
    }

    const account = await UserAccount.findOne({email})

    if(!account)
      return next(
        new AppError(
          404,
          'error',
          commonErrorMessages.NOT_FOUND
        ),
        req,
        res,
        next
      );
    const nowDate = new Date()
    const expiredTime = new Date(String(account.OTP_expired_time))

    if(nowDate.getTime() > expiredTime.getTime())
      return next(
        new AppError(
          400,
          'error',
          errorMessages.OTP_EXPIRED
        ),
        req,
        res,
        next
      );

    let isOTPCorrect = await bcrypt.compare(OTP, account.OTP)
    if(!isOTPCorrect)
      return next(
        new AppError(
          401,
          'error',
          errorMessages.OTP_WRONG
        ),
        req,
        res,
        next
      );
    
    //if all validated
    return res.status(200).json({
      status: 'success',
      data: {
        token: auth.createToken(account.id)
      },
    });

  } catch(err){
    console.log(err)
    next(err);
  }
}

exports.getUserDetail = async (req,res,next) => {
  try{
    const account = await UserAccount.findById(req.accountId)
    const profile = req.profileId ? await UserProfile.findById(req.profileId) : {}
    const contact = req.contactId ? await UserContact.findById(req.contactId) : {}
    const address = req.addressId ? await UserAddress.findById(req.addressId) : {}

    if(!account || !profile || !contact || !address){
      return next(
        new AppError(
          404,
          'error',
          errorMessages.GET_USER_DETAIL_ERROR
        ),
        req,
        res,
        next
      );
    }

    res.status(200).send({
      status:'success',
      data: {
        userAccount: account,
        userProfile: profile,
        userContact: contact,
        userAddress: address
      }
    })

  } catch(err){
    console.log(err)
    next(err);
  }
}



//for UserAccount database
exports.getAllAccount = base.getAll(UserAccount);
exports.getAccount = base.getOne(UserAccount);
// Don't update password on this
exports.updateAccount = base.updateOne(UserAccount);
exports.deleteAccount = base.deleteOne(UserAccount);


//for UserProfile database
exports.getAllProfile = base.getAll(UserProfile);
exports.getProfile = base.getOne(UserProfile);
exports.updateProfile = base.updateOne(UserProfile);
exports.deleteProfile= base.deleteOne(UserProfile);


//for UserContact database
exports.getAllContact = base.getAll(UserContact);
exports.getContact = base.getOne(UserContact);
exports.updateContact = base.updateOne(UserContact);
exports.deleteContact = base.deleteOne(UserContact);


//for UserAddress database
exports.getAllAddress = base.getAll(UserAddress);
exports.getAddress = base.getOne(UserAddress);
exports.updateAddress = base.updateOne(UserAddress);
exports.deleteAddress= base.deleteOne(UserAddress);