import express from 'express'
import cors from 'cors'

import courseRoutes from './routes/courses.js'
// create express app

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'devlearnhub-client.up.railway.app' :'http://localhost:3000';
const app = express()

app.use(express.json())
app.use(cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))


app.use('/api/courses', courseRoutes)

app.get('/', (req, res) => {
    res.redirect(CLIENT_URL)

}

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// })