import express from 'express'
import authController from '../controllers/AuthController.js'
import loginRequest from '../requests/LoginRequest.js'
import registerRequest from '../requests/RegisterRequest.js'
const router = express.Router()

router.post('/login', loginRequest, authController.login)
router.post('/register', registerRequest, authController.register)

export default router
