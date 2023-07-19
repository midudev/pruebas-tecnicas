import PropTypes from "prop-types";

function Badge({ number, show, children }) {
  return (
    <div className="relative">
      {number && show > 0 ? (
        <div
          role="badge"
          className="aGrow absolute pointer-events-none top-0 right-0 rounded-full inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-dark-text bg-primary-dark"
        >
          {number}
        </div>
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
  number: PropTypes.number,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Badge;
