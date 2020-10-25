const express = require('express');

const router = express.Router();
const userController = require('../controllers/user/user.controller.js');
const authController = require('../controllers/auth.controller.js');
const UserDetails = require('../models/userDetails.model.js');

router.get('/', (req,res) => {
    res.status(200).send({
        status: 'success'
    })
})

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/test', authController.test);



// //for testing purposes only, create the model. remember to include the required field defined in the model schema
// router.post('/saveSchema', async (req,res) => {
//     const chosen = req.body.model
//     const model = require('../models/'+chosen+'.model')
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

router.get('/userDetails', async (req,res,next) => {
    const userDetails = await UserDetails.findOne({accountId: req.accountId})
    req.id = userDetails._id
    return userController.getUserDetails(req,res,next)
});

router.put('/userDetails', async (req,res,next) => {
    const userDetails = await UserDetails.findOne({accountId: req.accountId})
    req.id = userDetails._id
    console.log(req.id)
    return userController.updateUserDetails(req,res,next)
});


module.exports = router;