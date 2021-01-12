const { request, response } = require("express");
const { validationResult } = require("express-validator");


const validatecamp = (req = request , res = response , next) => {

    const errors = validationResult(req)


    if(!errors.isEmpty()) {
        return res.status(401).json({
            ok : false,
            message : errors.array()[0].msg
        })
    }

    next()
}
module.exports= {
    validatecamp
}