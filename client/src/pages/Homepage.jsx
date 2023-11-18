import { useContext, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Course from "./courses/Course";

export async function loader({ params }) {
  const courseResponse = await fetch(`
  /api/courses
  `);
  const courses = await courseResponse.json();
  return { courses };
}

const Homepage = () => {
  const { currentUser } = useContext(AuthContext);
  const { courses } = useLoaderData();

  return (
    <div className="flex flex-col mt-24 items-center h-screen pb-40">
      <p className="text-5xl mb-8 font-bold">Welcome to DevLearnHub</p>
      {/* <p className="text-1xl italic mb-5">Hone your coding skills today!</p> */}
      <div className="flex items-start justify-center">
        <div className="flex flex-col justify-center">
          <div className="max-w-7xl mx-auto">
            <Course courses={courses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;