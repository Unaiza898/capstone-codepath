import React, { useState } from 'react';
import './CreateTrip.css'

const CreateTrip = () => {

    const [post, setPost] = useState({id: 0, title: "", instructor: "", duration: "", description: "",rating: 0,reviews:0,start_date: "", end_date: "", cost:"" })
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const createPost = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
          };
      
          fetch("http://localhost:3001/api/courses/", options);
          window.location = "/";

        
    }


    return (
        <div>
            <center><h3> Create New Trip</h3></center>
            <form>
                <label>Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>
                <label>Instructor</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label>Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}>
                </textarea>
                <br/>


                <label>rating</label><br />
                <input type="number" id="rating" name="rating" value={post.rating} onChange={handleChange}/><br />
                <br/>

                <label>Duration</label><br />
                <input type="text" id="duration" name="duration" value={post.duration} onChange={handleChange}/><br />
                <br/>

                <label>Start Date </label><br />
                <input type="text" id="start_date" name="start_date" value={post.start_date} onChange={handleChange}/><br />
                <br/>

                <label>End Date </label><br />
                <input type="text" id="end_date" name="end_date" value={post.end_date} onChange={handleChange}/><br />
                <br/>

                <label>Total Cost</label><br />
                <input type="text" id="cost" name="cost" value={post.cost} onChange={handleChange}/><br />
                <br/>

                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreateTrip