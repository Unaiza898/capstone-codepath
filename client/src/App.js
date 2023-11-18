import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadCourses from './pages/ReadCourse'
import CreateTrip from './pages/CreateTrip'
import EditTrip from './pages/EditTrip'
import CreateDestination from './pages/CreateDestination';
import ReadDestinations from './pages/ReadDestinations'
import TripDetails from './pages/TripDetails'
import { Link } from 'react-router-dom'
import CreateActivity from './pages/CreateActivity';
import AddToTrip from './pages/AddToTrip';
import Login from './pages/Login'
// import Avatar from './components/Avatar'
const App = () => {
  const [user, setUser] = useState([])

  const API_URL = 'https://devhub-server.vercel.app'
  
  // const API_URL = 'http://localhost:3001'
  const [course, setCourse] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${API_URL}/auth/login/success`, { credentials: 'include' } )
      const json = await response.json()
      setUser(json.user)
    }

    const fetchCourse = async () => {
      const response = await fetch(`https://devhub-server.vercel.app/api/courses/get`)
      const data = await response.json()
      setCourse(data)
    }
  
    fetchCourse()
    getUser()
  }, []);
  const logout = async () => {
    const url = `${API_URL}/auth/logout`
    const response = await fetch(url, { credentials: 'include' })
    const json = await response.json()
    window.location.href = '/'
  }

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: user && user.id ?
      <ReadCourses user={user} data={course} /> : 
      <div>
        <Login api_url={API_URL} />
        <ReadCourses user={user} data={course} />
        </div> 
    },
    {
      path:"/trip/new",
      element: <CreateTrip />
    },

    {
      path:"/destinations",
      element: <ReadDestinations data={destinations} />
    },

    {
      path:"/destination/new/:trip_id",
      element: <CreateDestination />
    },
    {
      path:"/activity/create/:trip_id",
      element: <CreateActivity />
    },
  ]);

  
  return ( 

    <div className="App">
{ 
 user && user.id ?
      <div className="header">

        <h1>DevLearnHub ✏️📙
      </h1>
        <Link to="/"><button className="headerBtn">Explore courses</button></Link>
        <Link to="/destinations"><button className="headerBtn">Explore Mentors</button></Link>
        <Link to="/trip/new"><button className="headerBtn"> + Add course </button></Link>
        <button onClick={logout} className='headerBtn'>Logout</button>
            {/* <Avatar className='avatar' user={user} /> */}
      </div>
        : <></>
}
        {element}
    </div>

  );
}

export default App;
