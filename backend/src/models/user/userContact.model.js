const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userContactSchema = new mongoose.Schema({
  userProfileIndex: {
    type: ObjectId,
    required: true,
  },
  contactType:[
      {
        email: {
          type: String,
          default:''
        },
        mobileNo: {
          type: String,
          default:''
        },
        homeNo: {
          type: String,
          default:''
        },
        officeNo: {
          type: String,
          default:''
        },
        defaultContact:{
          type: Boolean,
          default:false
        }
      }
  ],
  

});


const UserContact = mongoose.model('userContact', userContactSchema, 'userContacts');
module.exports = UserContact;
