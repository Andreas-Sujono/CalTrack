const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const consumptionSchema = new mongoose.Schema({
    accountId: {
        type: ObjectId,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
    menuName:{
        type: 'string',
        default: ''
    },
    menuPrice: {
        type: Number,
        default:0        
    },
    calory: {
        type: Number,
        default:0        
    },
});

const Consumption = mongoose.model('consumption', consumptionSchema, 'consumption');
module.exports = Consumption;