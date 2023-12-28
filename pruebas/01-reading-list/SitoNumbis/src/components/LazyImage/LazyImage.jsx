import { Fragment, useState } from "react";

import PropTypes from "prop-types";

// components
import Loading from "../Loading/Loading";

// image
import noPhoto from "../../assets/images/no-product.jpg";

// styles
import "./styles.css";

function LazyImage({ className, src, alt }) {
  const [loaded, setLoaded] = useState();

  const [error, setError] = useState(false);

  return (
    <Fragment>
      {!loaded ? <Loading className="w-full h-full bg-dark-alt-bg" /> : null}
      <img
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${error ? "error-image" : ""} ${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition`}
        src={!error ? src : noPhoto}
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
