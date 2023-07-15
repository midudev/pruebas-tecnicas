import PropTypes from "prop-types";

import { css } from "@emotion/css";

function Marker({ show }) {
  return (
    <div
      className={`absolute z-10 top-0 right-2 pointer-events-none h-full w-6 grid ${css({
        transition: "grid-template-rows 200ms ease",
        gridTemplateRows: !show ? "0fr" : "1fr",
      })}`}
    >
      <div className="bg-primary-dark w-full"></div>
    </div>
  );
}

Marker.propTypes = {
  show: PropTypes.bool,
};

export default Marker;
