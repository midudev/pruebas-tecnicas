import { memo, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

// fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// utils
import { scrollTo } from "some-javascript-utils/browser";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import styles from "./styles.module.css";

const ToTop = ({ className }) => {
  const [visible, setVisible] = useState(false);

  const { languageState } = useLanguage();

  const onScroll = useCallback(() => {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 100) setVisible(true);
    else setVisible(false);
  }, [setVisible]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const handleToTop = useCallback(() => {
    scrollTo(0);
  }, []);

  return (
    <button
      name="to-top"
      type="button"
      aria-label={languageState.texts.ariaLabels.toTop}
      onClick={handleToTop}
      style={{
        zIndex: visible ? 10 : -1,
        transform: visible ? "scale(1)" : "scale(0)",
      }}
      className={`${styles.main} ${className}`}
    >
      <FontAwesomeIcon className="external" icon={faArrowUp} />
    </button>
  );
};

ToTop.propTypes = {
  className: PropTypes.string,
};

const ToTopMemo = memo(
  (props) => <ToTop {...props} />,
  (oldProps, newProps) => {
    return oldProps.className === newProps.className;
  }
);

ToTopMemo.displayName = "ToTop";

export default ToTopMemo;
