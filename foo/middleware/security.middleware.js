const securityService = require('../services/security.service');
const logger = require('../logging/index.logging');
const errorConstants = require('../constants/error-status-codes.constants');

/**
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const securityMiddleware = function(req, res, next){
    console.log(`security middleware!`);
    /*
    if( req.path.indexOf('login')>-1 ){
        next();
        return;
    }

    const authToken = req.get('Authorization');
	if(!authToken){
        console.log(`headers: ${errorConstants.CUSTOM_ERROR_CODE} ${errorConstants.ERR_CODE_SYSTEM_ERRNOT_LOGGED_IN}`);
        res.status(401);
        res.header(errorConstants.CUSTOM_ERROR_CODE, errorConstants.ERR_CODE_SYSTEM_ERRNOT_LOGGED_IN);
        res.send({});
        return;
	}
    
    
    try{
        if( securityService.isTokenValid(authToken) ){
            return next();
        }

        res.status(401);
        res.setHeader(CUSTOM_ERROR_CODE, INVALID_SECURITY_TOKEN);
		res.send({});
        return;
    }
    catch(e){
        logger.warn(e);
        res.status(500);
        res.setHeader(CUSTOM_ERROR_CODE, ERR_CODE_SYSTEM_ERR);
		res.send({});
        return;
    };
    */
    next();
};

module.exports = securityMiddleware;
