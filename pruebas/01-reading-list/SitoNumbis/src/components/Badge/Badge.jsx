import PropTypes from "prop-types";

// styles
import styles from "./styles.module.css";

function Badge({ show, number, children }) {
  return (
    <div className="relative">
      {number && show > 0 ? (
        <p role="badge" className={`aGrow ${styles.main}`}>
          {number}
        </p>
      ) : null}
      {children}
    </div>
  );
}

Badge.defaultProps = {
  show: true,
  number: 0,
};

Badge.propTypes = {
  show: PropTypes.bool,
  number: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Badge;
