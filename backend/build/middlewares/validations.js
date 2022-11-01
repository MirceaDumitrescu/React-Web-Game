"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
var Joi = require("@hapi/joi");
var registerValidation = function (data) {
    var schema = Joi.object({
        username: Joi.string().min(6).required(),
        email: Joi.string()
            .min(3)
            .required()
            .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        }),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};
exports.registerValidation = registerValidation;
var loginValidation = function (data) {
    var schema = Joi.object({
        email: Joi.string()
            .min(3)
            .required()
            .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        }),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};
exports.loginValidation = loginValidation;
