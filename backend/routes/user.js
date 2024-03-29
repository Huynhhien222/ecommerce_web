import express from 'express'
const router = express.Router()
import {
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/UserController.js'
import { protect, admin } from '../middleware/AuthMiddleware.js'

router.route('/').get(protect, admin, getUsers)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

export default router
