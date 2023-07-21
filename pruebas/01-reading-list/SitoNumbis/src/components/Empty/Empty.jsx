import { useNavigate } from "react-router-dom";

// components
import PrimaryButton from "../PrimaryButton/PrimaryButton";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

function Empty() {
  const navigate = useNavigate();

  const { languageState } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-3 mt-3">
      <h3 className="text-xl text-center">{languageState.texts.empty.title}</h3>
      <p className="text-dark-alt-text text-center">{languageState.texts.empty.body}</p>
      <PrimaryButton
        name="go-home"
        onClick={() => navigate("/")}
        ariaLabel={languageState.texts.ariaLabels.toMainStock}
        className="!cursor-pointer"
      >
        {languageState.texts.ariaLabels.toMainStock}
      </PrimaryButton>
    </div>
  );
}

export default Empty;
