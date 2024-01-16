import { Link } from "react-router-dom";

const Modal = ({ open, onClose, course }) => {
  if (!open) return null; //if modal is not open, return null
  return (
    <div onClick={onClose} className="modal-overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
        key={course.title}
      >
        <span onClick={onClose} className="closeBtn">
          &times;
        </span>
        <div className="modal-content">
          <img src={course.img} alt={course.title} />
          <h3>{course.title}</h3>
          <h4>{course.type}</h4>
          <p>{course.info}</p>
          <Link to="/book">
          <button className="modal-btn">Book Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
