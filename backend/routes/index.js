import OrderRoutes from './order.js'
import ProductRoutes from './product.js'
import UserRoutes from './user.js'
import UploadRoutes from './upload.js'

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
