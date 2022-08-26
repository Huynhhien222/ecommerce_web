import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import routes from './routes/index.js'

//environment
dotenv.config()

//connect MongoDB
connectDB()

//init
const app = express()

//morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//json
app.use(express.json())

//routes
routes(app)

//static folder
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

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
 `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  ),
  console.log(
    ` - Local: http://localhost:${PORT}`.green.bold
  )
)
