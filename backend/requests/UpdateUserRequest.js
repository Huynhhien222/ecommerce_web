import { validationResult, checkSchema } from 'express-validator'
import userModel from '../models/User.js'
import { resourceMessageError } from './HelperRequest.js'

export default async (req, res, next) => {
    await checkSchema({
        email: {
            if: {
                options: (value) => {
                    if (value) {
                        return true
                    }
                    return false
                },
            },
            isEmail: {
                options: async (value) => {},
                errorMessage: __('email is invalid'),
                bail: true,
            },
            custom: {
                options: async (value) => {
                    if (value) {
                        const userExists = await userModel.findOne({
                            email: value,
                            $nor: [{ _id: req.params.id }],
                        })

                        if (userExists) {
                            throw new Error('email already exists')
                        }
                    }
                },
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
