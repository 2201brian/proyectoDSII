const Joi = require('joi');

const username = Joi.string().min(5).max(10);
const password = Joi.string().min(8).max(10);

const userSchema = Joi.object({
  username : username.required(),
  password : password.required()
});

module.exports = {userSchema}
