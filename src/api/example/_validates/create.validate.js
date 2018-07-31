/* eslint-disable newline-per-chained-call */
import Joi from 'joi';

export default (req, res, next) => {

    return Joi
        .object(
            {
                name        : Joi.string().max(50).required(),
                alias       : Joi.string().regex(Joi.regexes.alias).required(),
                genres      : Joi.array().items(Joi.string()).min(1).required(),
                originLocale: Joi.string(),
                originYear  : Joi.number().min(1500).max(new Date().getFullYear()),
                _parent     : Joi.string().regex(Joi.regexes.ObjectId).required()
            }
        )
        .validate(req.body, err => {
            if (err)
                return res.api.send(err.details, res.api.codes.UNPROCESSABLE_ENTITY);

            return next();
        });
}