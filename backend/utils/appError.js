class createError extends Error{
    constructor(statusCode, message){
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4')?'fail':'error';

        Error.captureStackTrace(this, this.constructor);
    }
}

moduls.exports = createError;