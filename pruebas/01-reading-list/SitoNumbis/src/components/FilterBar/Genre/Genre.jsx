import { memo } from "react";
import PropTypes from "prop-types";

function Genre({ genre, active, onClick }) {
  return (
    <button
      onClick={() => onClick(genre)}
      className={`px-5 py-3 transition min-w-[150px] cursor-default ${
        active ? "bg-primary" : "bg-dark-alt-bg hover:bg-primary-dark"
      } `}
    >
      {genre}
    </button>
  );
}

Genre.propTypes = {
  genre: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const GenreMemo = memo((props) => <Genre {...props} />, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.genre === newProps.genre &&
    oldProps.active === newProps.active &&
    oldProps.onClick === newProps.onClick
  );
}

GenreMemo.displayName = "Genre";

export default GenreMemo;
