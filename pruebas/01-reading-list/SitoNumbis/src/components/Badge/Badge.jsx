import PropTypes from "prop-types";

function Badge({ number, children }) {
  return (
    <div className="relative">
      {number > 0 ? (
        <div
          role="badge"
          className="aGrow pointer-events-none py-0 px-1 text-xs -top-[5px] -right-[10px] text-dark-text absolute bg-primary grid place-items-center rounded-full"
        >
          {number}
        </div>
      ) : null}

      {children}
    </div>
  );
}

Badge.defaultProps = {
  number: 0,
};

Badge.propTypes = {
  number: PropTypes.number,
  children: PropTypes.node,
};

export default Badge;
