import { memo } from "react";
import PropTypes from "prop-types";

import { css } from "@emotion/css";

// styles
import styles from "./styles.module.css";

function Marker({ show }) {
  return (
    <div
      className={`${styles.main} ${css({
        gridTemplateRows: !show ? "0fr" : "1fr",
      })}`}
    >
      <div className="bg-primary-dark w-full" />
    </div>
  );
}

Marker.propTypes = {
  show: PropTypes.bool,
};

const MarkerMemo = memo(
  (props) => <Marker {...props} />,
  (oldProps, newProps) => oldProps.show === newProps.show
);

MarkerMemo.displayName = "Marker";

export default MarkerMemo;
