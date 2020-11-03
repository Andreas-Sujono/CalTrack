const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

const {errorMessages} = require('../constants/general.constant')

// delete with request <id> in a <Model>
exports.deleteOne = Model => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.id);

    if (!doc) {
      return next(
        new AppError(404, 'error', errorMessages.NOT_FOUND),
        req,
        res,
        next
      );
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

// update with request <id>,<body> in a <Model>
exports.updateOne = (Model, config = {}) => async (req, res, next) => {
  try {    
    const doc = await Model.findByIdAndUpdate(req.id, req.body, {
      new: true,
      runValidators: true,
      ...config
    });

    if (!doc) {
      return next(
        new AppError(404, 'error', errorMessages.NOT_FOUND),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};

// create a <document> in a <Model>
exports.createOne = Model => async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};

// create a <document> in a <Model>
exports.createMany = Model => async (req, res, next) => {
  try {
    const doc = await Model.insertMany(req.body); //must in an array

    res.status(201).json({
      status: 'success',
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};

// find by request <id> in a <Model>
exports.getOne = Model => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.id);

    if (!doc) {
      return next(
        new AppError(404, 'error', errorMessages.NOT_FOUND),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};

// getAll information by request <query> in a model
exports.getAll = Model => async (req, res, next) => {
  try {
    const features = new APIFeatures(Model.find(), req.query).sort().paginate();

    const doc = await features.query;

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};