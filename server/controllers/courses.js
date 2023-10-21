import { parse } from 'dotenv'
import { pool } from '../config/database.js'
const createCourse = async (req, res) => {

    try{ 
    const{title, instructor, duration, description, rating, reviews, start_date, end_date, cost} = req.body

    const results = await pool.query('INSERT INTO courses (title, instructor, duration, description, rating, reviews, start_date, end_date, cost) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [title, instructor, duration, description, rating, reviews, start_date, end_date, cost])

    res.status(201).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
      }
}  

