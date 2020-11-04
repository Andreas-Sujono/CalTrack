const base = require('../base.controller');

const Consumption = require('../../models/consumption.model.js');

const {errorMessages: commonErrorMessages} = require('../../constants/general.constant')
const AppError = require('../../utils/appError');

const calculateCalories = (arr) => {
    return arr.reduce((acc, item) => acc + item.calory ,0)
}

const calculateSpending = (arr) => {
    return arr.reduce((acc, item) => acc + item.menuPrice ,0)
}

exports.getHistory = async (req, res, next) => {
    try{
        const accountId = req.accountId

        //week starts on Monday until Sunday
        let now = new Date()
        let currentDay = now.getDay()
        if(currentDay === 0) currentDay = 7 // 0 is sunday, but in the app sunday is 7
        let currentDate = now.getDate()
        let currentMonth = now.getMonth()
        let currentYear = now.getFullYear()

        let differenceDay = currentDay - 1

        let todayStartTimestamp = new Date(currentYear, currentMonth, currentDate).getTime();
        let lastMonday = todayStartTimestamp - (differenceDay * 24 * 3600 * 1000)

        let totalResultMon = await Consumption.find({accountId, date: {"$gte": lastMonday, "$lt": lastMonday + 24 * 3600 * 1000} })
        let totalResultTue = await Consumption.find({accountId, date: {"$gte": lastMonday + 1 * 24 * 3600 * 1000, "$lt": lastMonday + 2 * 24 * 3600 * 1000} })
        let totalResultWed= await Consumption.find({accountId, date: {"$gte": lastMonday + 2 * 24 * 3600 * 1000, "$lt": lastMonday + 3 * 24 * 3600 * 1000} })
        let totalResultThu = await Consumption.find({accountId, date: {"$gte": lastMonday + 3 * 24 * 3600 * 1000, "$lt": lastMonday + 4 * 24 * 3600 * 1000} })
        let totalResultFri = await Consumption.find({accountId, date: {"$gte": lastMonday + 4 * 24 * 3600 * 1000, "$lt": lastMonday + 5 * 24 * 3600 * 1000} })
        let totalResultSat = await Consumption.find({accountId, date: {"$gte": lastMonday + 5 * 24 * 3600 * 1000, "$lt": lastMonday + 6 * 24 * 3600 * 1000} })
        let totalResultSun = await Consumption.find({accountId, date: {"$gte": lastMonday + 6 * 24 * 3600 * 1000, "$lt": lastMonday + 7 * 24 * 3600 * 1000} })

        let totalResult = [totalResultMon, totalResultTue, totalResultWed, totalResultThu, totalResultFri, totalResultSat, totalResultSun]

        res.status(200).json({
            status: 'success',
            data: {
              x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              spending: totalResult.map(item => calculateSpending(item)),
              calories: totalResult.map(item => calculateCalories(item)),
            },
        });

    } catch (error) {
        next(error);
    }
}

exports.getSpending = async (req, res, next) => {
    try{
        const accountId = req.accountId

        let totalResult = await Consumption.find({accountId})

        //week starts on Monday until Sunday
        let now = new Date()
        let currentDay = now.getDay()
        if(currentDay === 0) currentDay = 7 // 0 is sunday, but in the app sunday is 7
        let currentDate = now.getDate()
        let currentMonth = now.getMonth()
        let currentYear = now.getFullYear()

        let differenceDay = currentDay - 1

        let todayStartTimestamp = new Date(currentYear, currentMonth, currentDate).getTime();
        let lastMonday = todayStartTimestamp - (differenceDay * 24 * 3600 * 1000)
        let nextMonday = lastMonday + (7 * 24 * 3600 * 1000)

        let totalResultInWeek = await Consumption.find({accountId, date: {"$gte": lastMonday, "$lt": nextMonday} })

        res.status(200).json({
            status: 'success',
            data: {
              totalCalories: calculateCalories(totalResult),
              totalSpending: calculateSpending(totalResult),
              caloriesInAWeek: calculateCalories(totalResultInWeek),
              spendingInAWeek: calculateSpending(totalResultInWeek),
            },
        });

    } catch (error) {
        next(error);
    }
}


exports.addConsumption = async (req, res, next) => {
    try{
        const accountId = req.accountId
        const {date, menuName, menuPrice, calory} = req.body

        if (!date || !menuName || !menuPrice || !calory) {
            return next(
              new AppError(400, 'error', commonErrorMessages.FIELD_EMPTY),
              req,
              res,
              next
            );
        }

        let newConsumption = await Consumption.create({accountId,  date, menuName, menuPrice, calory })

        res.status(200).json({
            status: 'success',
            data: newConsumption,
        });

    } catch (error) {
        next(error);
    }
}

//for UserAccount database
exports.getAllConsumption = base.getAll(Consumption);
exports.getConsumption = base.getOne(Consumption);
exports.updateConsumption = base.updateOne(Consumption); // Don't update password on this
exports.deleteConsumption = base.deleteOne(Consumption);
