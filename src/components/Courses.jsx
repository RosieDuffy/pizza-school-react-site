import { useState } from "react";

import courses from "../data/courses";
import Modal from "./Modal";

const Courses = () => {
  const [modal, setModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const getCourseDiv = courses.map((course) => {
    return (
      <div
        className="course"
        key={course.title}
        onClick={() => setCurrentCourse(course)}
      >
        <img src={course.img} alt={course.title} />
        <div className="course-text">
          <h3>{course.title}</h3>
          <h4>{course.type}</h4>
          <p>Click to learn more and book!</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="courses-title" id="courses">
        <h2>Courses</h2>
      </div>
      <div className="courses-container">
        <div className="courses">
          <Modal
            open={modal}
            onClose={() => setModal(false)}
            course={currentCourse}
          />
          <div onClick={() => setModal(true)}>
            {getCourseDiv.map((course) => course)}

            {console.log(currentCourse)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
