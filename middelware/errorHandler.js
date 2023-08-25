const {constants} = require('../constants');

const errorHandler = (err, req, res, next) => {
   const statusCode = res.statusCode ? res.statusCode :500;
   switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json({title:"Validation Failed",message: err.message, stackTrace : err.stack})
        break;
    case constants.NOT_FOUND:
        res.json({title:"Route not found",message: err.message, stackTrace : err.stack})
    default:
        console.log("No Error all goods !")
        break;
   }
};

module.exports = errorHandler;