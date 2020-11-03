const base = require('../base.controller');

const Consumption = require('../../models/consumption.model.js');

const {errorMessages: commonErrorMessages} = require('../../constants/general.constant')

exports.getSpending = async (req, res, next) => {
    try{
        const accountId = req.accountId

        let totalResult = await Consumption.find({accountId})

        //week starts on Monday until Sunday
        let now = new Date()
        let currentDay = now.getDay()
        if(currentDay === 0) currentDay = 7
        let currentDate = now.getDate()
        let currentMonth = now.getMonth() + 1
        let currentYear = now.getFullYear()

        let differenceDay = currentDay - 1
        currentDate -= differenceDay
        if(currentDate <= 0){
            currentMonth -= 1
            if(currentMonth <= 0){
                currentYear -= 1
                currentDate = new Date(currentYear, currentMonth, 0).getDate();
            }
        }

        let lastMonday = new Date(currentYear, currentMonth-1, currentDate)
        let nextMonday = new Date(lastMonday.getTime() + 7 * 24 * 3600 * 1000)

        let totalResultInWeek = await Consumption.find({accountId, date: {"$gte": lastMonday, "$lt": nextMonday} })

        const calculateCalories = (arr) => {
            return arr.reduce((acc, item) => acc + item.calory ,0)
        }

        const calculateSpending = (arr) => {
            return arr.reduce((acc, item) => acc + item.menuPrice ,0)
        }

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
