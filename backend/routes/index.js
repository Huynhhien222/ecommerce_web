import orderRoutes from './order.js'
import productRoutes from './product.js'
import userRoutes from './user.js'
import uploadRoutes from './upload.js'
import authRoutes from './auth.js'

const routes = (app) => {
    app.use('/api/auth', authRoutes)
    app.use('/api/orders', orderRoutes)
    app.use('/api/products', productRoutes)
    app.use('/api/users', userRoutes)
    app.use('/api/upload', uploadRoutes)

    app.get('/api/config/paypal', (req, res) =>
        res.send(process.env.PAYPAL_CLIENT_ID)
    )
}

export default routes
