import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const Icons = ({ onEditClick, onDeleteClick }) => {
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
    </div>
  );
};
//It's the same as Editing.jsx
//if I remove propTypes, react get confused that Icons'props not only props, but also functions because we use them as function in TodoForm as callback
Icons.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
export default Icons;
