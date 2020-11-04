const express = require('express');

const router = express.Router();

const consumptionController = require('../controllers/consumption/consumption.controller.js');
const authController = require('../controllers/auth.controller.js');

// Protect all routes after this middleware, must login to continue
router.use(authController.protect);

router.get('/', async (req,res,next) => {
    return consumptionController.getConsumption(req,res,next)
});

router.get('/all', async (req,res,next) => {
    req.query = {accountId: req.accountId}
    return consumptionController.getAllConsumption(req,res,next)
});

router.get('/spending', async (req,res,next) => {
    return consumptionController.getSpending(req,res,next)
});

router.get('/history', async (req,res,next) => {
    return consumptionController.getHistory(req,res,next)
});

router.post('/', async (req,res,next) => {
    return consumptionController.addConsumption(req,res,next)
});

//must give id of the consumption,
router.put('/', async (req,res,next) => {
    req.id = req.body.id
    return consumptionController.updateConsumption(req,res,next)
});

module.exports = router;