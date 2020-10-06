const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userDetailsSchema = new mongoose.Schema({
  accountId: {
    type: ObjectId,
    required: true,
  },
  age: {
    type: Number,
    default:0        
  },
  weight: {
    type: Number,
    default:0
  },
  height: {
    type: Number, 
    default:0
  },
  goalWeight: {
    type: Number, 
    default:0
  },
  goalDate: {
    type: Date,
    default:new Date()
  },
  profilePhoto: {
    type: String, 
    default:''
  },
  budget: {
    type: Number,
    default:0,
  },
});

const UserProfile = mongoose.model('userDetails', userDetailsSchema, 'userDetails');
module.exports = UserProfile;
