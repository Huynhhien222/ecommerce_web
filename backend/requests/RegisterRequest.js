import { validationResult, checkSchema } from 'express-validator'
import userModel from '../models/User.js'
import { resourceMessageError } from './HelperRequest.js'

const registerRequest = async (req, res, next) => {
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
            custom: {
                options: async (value) => {
                    const userExists = await userModel.findOne({ email: value })

                    if (userExists) {
                        throw new Error('username already exists')
                    }
                },
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
        name: {
            notEmpty: {
                errorMessage: __('name_required'),
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

export default registerRequest
