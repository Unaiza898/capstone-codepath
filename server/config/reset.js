import { pool } from "./database.js";
import "./dotenv.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";

const currentPath = fileURLToPath(import.meta.url);
const coursesFile = fs.readFileSync(
  path.join(dirname(currentPath), "../config/data/data.json")
);
const coursesData = JSON.parse(coursesFile);
console.log(coursesData);
const createCoursesTable = async () => {
  const createCoursesTableQuery = `
  CREATE TABLE IF NOT EXISTS courses (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    instructor varchar(100) NOT NULL,
    duration varchar(50) NOT NULL,
    description varchar(500) NOT NULL,
    rating numeric NOT NULL,
    reviews integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    cost money NOT NULL
  );
`;
  try {
    await pool.query(createCoursesTableQuery);
    console.log("🎉 course table created successfully");
  } catch (error) {
    console.error("🔥 error creating course table", error);
  }
};

const seedCoursesTable = async () => {
  await createCoursesTable();

  coursesData.forEach((event) => {
    const insertCoursesQuery = `
  INSERT INTO courses (title, instructor, duration, description, rating, reviews, start_date, end_date, cost)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
`;
    const values = [
      event.title,
      event.instructor,
      event.duration,
      event.description,
      event.rating,
      event.reviews,
      event.startdate,
      event.enddate,
      event.cost,
    ];
    pool.query(insertCoursesQuery, values, (error, res) => {
      if (error) {
        console.error("🔥 error inserting courses", error);
        return;
      }
      console.log("🎉 courses inserted successfully");
    });
  });
};

// const createTracksTable = async () => {
//     const createTracksTableQuery = `
//         CREATE TABLE IF NOT EXISTS tracks (
//             id serial PRIMARY KEY,
//             name varchar(100) NOT NULL,
//             description varchar(500) NOT NULL
//         );
//     `

//     try {
//         const res = await pool.query(createTracksTableQuery)
//         console.log('🎉 Tracks table created successfully')
//       }
//       catch (error) {
//         console.error('🔥 Error creating Tracks table', error)
//       }

//   }

  const createChallengeTable = async () => {
    const createChallengeTableQuery = `
        CREATE TABLE IF NOT EXISTS challenge (
            id serial PRIMARY KEY,
            course_id int NOT NULL,
            challenge varchar(100) NOT NULL,
            FOREIGN KEY(course_id) REFERENCES courses(id)
        );
    `
    try {
        const res = await pool.query(createChallengeTableQuery)
        console.log('🎉 Challenge table created successfully')
      }
        catch (error) {
            console.error('🔥 Error creating Challenge table', error)
        }
  }

//   const createUsersTable = async () => {
//     const createUsersTableQuery = `
//         CREATE TABLE IF NOT EXISTS users (
//             id serial PRIMARY KEY,
//             githubid integer NOT NULL,
//             username varchar(100) NOT NULL,
//             avatarurl varchar(500) NOT NULL,
//             accesstoken varchar(500) NOT NULL
//         );
//     `
//     try {
//         const res = await pool.query(createUsersTableQuery)
//         console.log('🎉 users table created successfully')
//       }
//       catch (error) {
//         console.error('⚠️ error creating users table', err)
//       }
//   }
  const createCoursesUsersTable = async () => {
    const createCoursesUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS courses_users (
            course_id int NOT NULL,
            user_id int NOT NULL,
            PRIMARY KEY (course_id, user_id),
            FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE,
            FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
        );
    `

    try {
        const res = await pool.query(createCoursesUsersTableQuery)
        console.log('🎉 courses_users table created successfully')
      }
      catch (error) {
        console.error('⚠️ error creating courses_users table', error)
      }
  }
// seedCoursesTable();
// createTracksTable();
createChallengeTable();
// createUsersTable();
// createCoursesUsersTable();
