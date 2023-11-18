// import express from 'express'
// import cors from 'cors'

// import courseRoutes from './routes/courses.js'
// // create express app

// import passport from 'passport'
// import session from 'express-session'
// import { GitHub } from './config/auth.js'
// import authRoutes from './routes/auth.js'

// const app = express()
// app.use(session({
//   secret: 'codepath', // put in .env!!!!!!
//   resave: false,
//   saveUninitialized: true
// }))

// app.use(express.json())
// app.use(cors({
//   origin: 'https://capstone-codepath-ily3mvqmj-unaiza898.vercel.app/',
//   methods: 'GET,POST,PUT,DELETE,PATCH',
//   credentials: true
// }))

// app.use(passport.initialize())
// app.use(passport.session())
// passport.use(GitHub)

// passport.serializeUser((user, done) => {
//   done(null, user)
// })

// passport.deserializeUser((user, done) => {
//   done(null, user)
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// // authentication routes
// app.use('/auth', authRoutes)

// app.use('/api/courses', courseRoutes)


// // const PORT = process.env.PORT || 3001

// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // })

import express from 'express'
import cors from 'cors'

import courseRoutes from './routes/courses.js'
// create express app

import passport from 'passport'
import session from 'express-session'
import { GitHub } from './config/auth.js'
import authRoutes from './routes/auth.js'

const app = express()
app.use(session({
  secret: 'codepath', // put in .env!!!!!!
  resave: false,
  saveUninitialized: true
}))

app.use(express.json())
app.use(cors({
  origin: 'https://devhub-client.vercel.app/',
  methods: 'GET,POST,PUT,DELETE,PATCH',
  credentials: true
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(GitHub)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

app.get('/', (req, res) => {
  res.redirect('https://devhub-client.vercel.app/')
})

app.use('/auth', authRoutes)

app.use('/api/courses', courseRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})