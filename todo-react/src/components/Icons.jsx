import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const Icons = ({ onEditClick, onDeleteClick, completed }) => {
  return (
    <div className="mr-3">
      <FontAwesomeIcon
        icon={faPenNib}
        style={{ color: "#3c00ff" }}
        className="mr-3"
        onClick={onEditClick}
      />
      <FontAwesomeIcon
        icon={faTrash}
        style={{ color: "#3c00ff" }}
        onClick={onDeleteClick}
      />
    </div>
  );
};
Icons.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};
export default Icons;
