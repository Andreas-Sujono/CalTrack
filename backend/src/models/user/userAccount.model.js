const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userAccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },

  activationKey: {
      type: String,
      required: true,
  },
  firstUse: {
      type: Boolean,
      default: true
  },
  date_of_last_password_change: {
      type: Date,
      default: new Date()
  },
  status: { //after user activate their account
    type: Boolean,
    default: false,
  },
  OTP: {
    type: 'string',
    default: ''
  },
  OTP_expired_time: {
    type: Date,
    default: new Date()
  }
});

userAccountSchema.pre('save', async function(next) {

  console.log('pre save is triggered')
  // check the password if it is modified
  if (!this.isModified('password')) {
    return next();
  }

  // Hashing the password
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

// This is Instance Method that is gonna be available on all documents in a certain collection
userAccountSchema.methods.correctPassword = async function(
  typedPassword,
  originalPassword
) {
  return await bcrypt.compare(typedPassword, originalPassword);
};


const UserAccount = mongoose.model('userAccount', userAccountSchema, 'userAccounts');
module.exports = UserAccount;