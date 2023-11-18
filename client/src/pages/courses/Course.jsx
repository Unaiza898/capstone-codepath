import { Link } from "react-router-dom";

const Course = ({ courses }) => {
  //   console.log(college.id);
  return (
    <div
      className="
    grid gap-8 justify-items-center
    sm:grid-flow-row 
    md:grid-cols-2 md:grid-flow-row
    lg:grid-cols-3
    xl:grid-cols-3
    "
    >
      {courses.map(
        ({
          id,
          title,
          instructor,
          duration,
          description,
          rating,
          reviews,
          start_date,
          end_date,
          cost,
        }) => (
          <Link
            // to={`/college/${collegeData}/courses/${course.id}`}
            to={`/courses/${id}`}
            key={id}
          >
            <button
              className="px-5 py-5 bg-[#f0f0f0] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
              hover:bg-[#b872d4] hover:text-white transition duration-200
              border-b-[2px] border-[#b872d4]
              w-[20rem] max-h-[15rem] min-h-[10rem]
            
              "
            >
              <p className="capitalize text-xl mb-4 font-bold">{title}</p>
              <p className="capitalize">{instructor}</p>
              <p className="font-bold">{rating}</p>
            </button>
          </Link>
        )
      )}
    </div>
  );
};

export default Course;