const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userAddressSchema = new mongoose.Schema({
    userProfileIndex: {
        type: ObjectId,
        required: true,
    },
    address: [
        {
            addressLine1:{
                type:String,
                default:''
            },
            addressLine2:{
                type:String,
                default:''
            },
            addressLine3:{
                type:String,
                default:''
            },
            addressLine4:{
                type:String,
                default:''
            },
            addressLine5:{
                type:String,
                default:''
            },
            country:{
                type:String,
                default:''
            },
            postalCode:{
                type:String,
                default:''
            },
            type: {
                type: String,
                enum: ["home", "mailing"],
                default: "home"
            }
        },
    ]

});


const UserAddress = mongoose.model('userAddress', userAddressSchema, 'userAddresses');
module.exports = UserAddress;
