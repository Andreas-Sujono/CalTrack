const express = require('express');

const router = express.Router();
const userController = require('../../controllers/user/user.controller.js');
const authController = require('../../controllers/auth.controller.js');

router.post('/login', authController.login);
router.post('/activate', authController.activate);

router.put('/resetPassword', userController.resetPassword)
router.post('/forgotPassword', userController.forgotPassword)
router.post('/validateOTP', userController.validateOTP)

router.post('/createAccount', userController.createAccount)

router.get('/', (req,res) => {
    res.status(200).send({
        status: 'success'
    })
})

// //for testing purposes only, create the model. remember to include the required field defined in the model schema
// router.post('/saveSchema', async (req,res) => {
//     const folder = req.body.folder
//     const chosen = req.body.model
//     const model = require('../../models/'+folder+'/'+chosen+'.model')
//     model.create(req.body.data, (err,data) => {
//         if(err){
//             return res.status(400).json({
//                 result: 'failed',
//                 error: err
//             })
//         }
//         return  res.status(200).json({
//             status:'success',
//             data: data
//         })
//     })
// })

// Protect all routes after this middleware, must login to continue
router.use(authController.protect);

router.get('/userDetail', userController.getUserDetail)

router.put('/updateAccount', (req,res,next) => {
    req.id = req.accountId
    return userController.updateAccount(req,res,next)
});
router.delete('/deleteAccount', (req,res,next) => {
    req.id = req.accountId
    return userController.deleteAccount(req,res,next)
});
   

router.put('/updateProfile', (req,res,next) => {
    req.id = req.profileId
    return userController.updateProfile(req,res,next)
});
router.delete('/deleteProfile', (req,res,next) => {
    req.id = req.profileId
    return userController.deleteProfile(req,res,next)
});


router.put('/updateContact', (req,res,next) => {
    req.id = req.contactId
    return userController.updateContact(req,res,next)
});
router.delete('/deleteContact', (req,res,next) => {
    req.id = req.contactId
    return userController.deleteContact(req,res,next)
});


router.put('/updateAddress', (req,res,next) => {
    req.id = req.addressId
    return userController.updateAddress(req,res,next)
});
router.delete('/deleteAddress', (req,res,next) => {
    req.id = req.addressId
    return userController.deleteAddress(req,res,next)
});


module.exports = router;
