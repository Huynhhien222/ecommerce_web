import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/ErrorMiddleware.js'
import { connectDB } from './config/database.js'
import routes from './routes/index.js'
import swagger from './swaggers/index.js'
import fs from 'fs'
import moment from 'moment'
const __dirname = path.resolve()

//init
const app = express()
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//environment
dotenv.config()

//connect MongoDB
connectDB()

//morgan
const pathFolderLogs = __dirname + `/backend/storages/logs`
if (!fs.existsSync(pathFolderLogs)) {
    fs.mkdirSync(pathFolderLogs)
}
let accessLogStream = fs.createWriteStream(
    path.join(pathFolderLogs, `/${moment().format('Y_M_D')}.log`),
    { flags: 'a' }
)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('combined', { stream: accessLogStream }))
}

//routes
routes(app)

//swagger
swagger(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

//middleware
app.use(notFound)
app.use(errorHandler)

//config server
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    ),
    console.log(` - Local: http://localhost:${PORT}`.green.bold)
)
