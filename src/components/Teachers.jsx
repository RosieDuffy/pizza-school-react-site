import teachers from "../data/teachers";

const Teachers = () => {

const getTeacherDiv = teachers.map((teacher) => {
  return (
    <div className="teacher" key={teacher.name}>
      <img
        src={teacher.img}
        alt={teacher.name}
      />
      <div className="overlay">
        <div className="text">
          <h3>{teacher.name}</h3>
          <h4>{teacher.nickname}</h4>
          <p>
            {teacher.bio}
          </p>
        </div>
      </div>
    </div>
  );
})

  return (
    <>
      <div className="teachers">
        <div className="teachers-title">
          <h2>Meet Our Instructors</h2>
        </div>
        <div className="info-teachers">
          {getTeacherDiv.map((teacher) => teacher)}
        </div>
      </div>
    </>
  );
};

export default Teachers;
