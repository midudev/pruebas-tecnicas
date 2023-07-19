import { useMemo } from "react";
import PropTypes from "prop-types";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Error = (props) => {
  const { onRetry, text } = props;
  const { languageState } = useLanguage();

  const error = useMemo(() => {
    return languageState.texts.error;
  }, [languageState]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <h2 className="font-bold text-error text-2xl text-primary-light">
        <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
        {error.title}
      </h2>
      <p className="text-dark-alt-text">{text}</p>
      {onRetry ? (
        <button
          name={error.reload}
          aria-label={languageState.texts.ariaLabels.reload}
          onClick={onRetry ? onRetry : () => window.location.reload()}
          className="cta"
        >
          {error.reload}
        </button>
      ) : null}
    </div>
  );
};

Error.propTypes = {
  onRetry: PropTypes.func,
  text: PropTypes.string,
};

export default Error;
