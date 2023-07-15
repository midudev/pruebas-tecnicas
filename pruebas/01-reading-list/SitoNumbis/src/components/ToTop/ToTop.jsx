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
import "./style.css";

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
      type="button"
      name={languageState.texts.ariaLabels.toTop}
      aria-label={languageState.texts.ariaLabels.toTop}
      onClick={handleToTop}
      style={{
        zIndex: visible ? 10 : -1,
        transform: visible ? "scale(1)" : "scale(0)",
      }}
      className={`to-top fixed bottom-5 right-5 rounded-circle w-9 h-9 pt-1 dark:text-primary  dark:hover:bg-primary hover:bg-primary transition hover:text-white dark:hover:text-white ${className}`}
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
