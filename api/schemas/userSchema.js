const Joi = require("joi");

const idSchm = Joi.string().min(6).max(10);
const nameSchm = Joi.string().min(9).max(80);
const emailSchm = Joi.string().min(5).email();
const passwordSchm = Joi.string().min(6).max(10);

const createUser = Joi.object({
    name : nameSchm.required(),
    email : emailSchm.required(),
    username : idSchm.required(),
    password : passwordSchm.required()
});

module.exports = {createUser};