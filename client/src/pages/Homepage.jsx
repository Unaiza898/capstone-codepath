import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Homepage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col mt-24 items-center h-screen pb-40">
      <p className="text-5xl mb-8 font-bold">Welcome to DevLearnHub</p>
      {/* <p className="text-1xl italic mb-5">Hone your coding skills today!</p> */}

      {!currentUser && (
        <div className="flex gap-4 mt-4">
          <Link to="/login">
            <button className="bg-[#000000] text-white px-6 py-2 rounded ">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-[#000000] text-white px-4 py-2 rounded">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Homepage;
