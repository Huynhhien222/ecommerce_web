import express from 'express'
const router = express.Router()
import userController from '../../controllers/UserController.js'
import * as authMiddleware from '../../middleware/AuthMiddleware.js'
import updateUserRequest from '../../requests/UpdateUserRequest.js'

router.use(authMiddleware.admin)
router.route('/').get(userController.getUsers)
router
    .route('/:id')
    .get(userController.getUserById)
    .put(updateUserRequest, userController.updateUser)
    .delete(userController.deleteUser)

export default router
