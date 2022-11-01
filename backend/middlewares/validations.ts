const Joi = require("@hapi/joi");

export const registerValidation = (data: any) => {
	const schema = Joi.object({
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

export const loginValidation = (data: Object) => {
	const schema = Joi.object({
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
