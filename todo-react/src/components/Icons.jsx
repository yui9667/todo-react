import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const Icons = ({
  onEditClick,
  onDeleteClick,
  onToggleCompletion,
  completed,
}) => {
  return (
    <div className="mr-3">
      <FontAwesomeIcon
        icon={faPenNib}
        style={{ color: "#3c00ff" }}
        className="mr-3"
        onClick={(e) => {
          e.stopPropagation();
          onEditClick();
        }}
      />
      <FontAwesomeIcon
        icon={faTrash}
        style={{ color: "#3c00ff" }}
        onClick={(e) => {
          e.stopPropagation();
          onDeleteClick();
        }}
      />
      <FontAwesomeIcon
        icon={faCheck} // You can change this to any other icon for task completion
        style={{ color: completed ? "#00ff00" : "#ff0000" }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          onToggleCompletion();
        }}
      />
    </div>
  );
};
Icons.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggleCompletion: PropTypes.func.isRequired,
};
export default Icons;
