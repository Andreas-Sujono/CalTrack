const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userProfileSchema = new mongoose.Schema({
  userIndex: {
    type: ObjectId,
    required: true,
  },
  firstName: {
    type: String,
    default:''        
  },
  lastName: {
    type: String,
    default:''
  },
  gender: {
    type: String, 
    default:''
  },
  salutation: {
    type: String, 
    default:''
  },
  nationalId: {
    type: String, 
    default:''
  },
  dateOfBirth: {
    type: Date,
    default:new Date()
  }
});

const UserProfile = mongoose.model('userProfile', userProfileSchema, 'userProfiles');
module.exports = UserProfile;
