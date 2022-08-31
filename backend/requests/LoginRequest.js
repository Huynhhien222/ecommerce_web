import { validationResult, checkSchema } from 'express-validator'
import { resourceMessageError } from './HelperRequest.js'

const loginRequest = async (req, res, next) => {
    await checkSchema({
        username: {
            notEmpty: {
                errorMessage: __('username_required'),
                bail: true,
            },
            isEmail: {
                errorMessage: __('username_email'),
                bail: true,
            },
        },
        password: {
            notEmpty: {
                errorMessage: __('password_required'),
                bail: true,
            },
            isLength: {
                options: { min: 6 },
                errorMessage: __('password_min_characters', 6),
                bail: true,
            },
        },
    }).run(req)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        let messages = resourceMessageError(errors)
        return res.status(422).json({
            status: 'error',
            errors: messages,
        })
    }

    next()
}

export default loginRequest
