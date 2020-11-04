const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userAccountSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  date_of_last_password_change: {
      type: Date,
      default: new Date()
  },
  OTP: {
    type: 'string',
    default: ''
  },
  OTP_expired_time: {
    type: Date,
    default: new Date()
  },
  isFirstUse: {
    type: Boolean,
    default: true
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


const UserAccount = mongoose.model('userAccount', userAccountSchema, 'userAccount');
module.exports = UserAccount;