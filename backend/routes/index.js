import OrderRoutes from './orderRoutes.js'
import ProductRoutes from './productRoutes.js'
import UserRoutes from './userRoutes.js'
import UploadRoutes from './uploadRoutes.js'

const routes = (app) => {
    app.use('/api/orders', OrderRoutes)
    app.use('/api/products', ProductRoutes)
    app.use('/api/users', UserRoutes)
    app.use('/api/upload', UploadRoutes)

    app.get('/api/config/paypal', (req, res) =>
        res.send(process.env.PAYPAL_CLIENT_ID)
    )

}

export default routes