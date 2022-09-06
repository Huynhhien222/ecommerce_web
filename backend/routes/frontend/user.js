import express from 'express'
const router = express.Router()
import userController from '../../controllers/UserController.js'
import * as authMiddleware from '../../middleware/AuthMiddleware.js'
import updateUserRequest from '../../requests/UpdateUserRequest.js'

router.use(authMiddleware.protect)
router
    .route('/profile')
    .get(userController.getProfile)
    .put(updateUserRequest, userController.updateProfile)

export default router
