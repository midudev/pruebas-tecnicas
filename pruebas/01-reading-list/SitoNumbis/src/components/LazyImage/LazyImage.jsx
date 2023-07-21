import { Fragment, useState } from "react";

import PropTypes from "prop-types";

// components
import Loading from "../Loading/Loading";

// styles
import "./styles.css";

function LazyImage({ className, src, alt }) {
  const [loaded, setLoaded] = useState();

  return (
    <Fragment>
      {!loaded ? <Loading className="w-full h-full bg-dark-alt-bg" /> : null}
      <img
        onLoad={() => setLoaded(true)}
        className={`${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition`}
        src={src}
        alt={alt}
      />
    </Fragment>
  );
}

LazyImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default LazyImage;
