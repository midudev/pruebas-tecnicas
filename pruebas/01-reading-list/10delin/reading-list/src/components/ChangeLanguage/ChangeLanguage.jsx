import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import SpainIcon from "../../assets/images/spain.webp";
import UkIcon from "../../assets/images/united-kingdom.webp";

import { styled } from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: 100px;
  right: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 20px 0;
  width: 15%;
`;

const StyledContent = styled.div`
  display: flex;
  background-color: ${({ isSpanish }) => (isSpanish ? "#699eec" : "#dbdbdb")};
  color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${({ isSpanish }) => (isSpanish ? "#2472e7" : "#699eec")};
  }
`;

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const isSpanish = language === "es";

  return (
    <StyledWrapper>
      <StyledContent
        isSpanish={isSpanish}
        onClick={() => setLanguage("es")}
        data-cy="es-lang"
      >
        <StyledImage src={SpainIcon} alt="Spanish" />
      </StyledContent>
      <StyledContent
        isSpanish={!isSpanish}
        onClick={() => setLanguage("en")}
        data-cy="en-lang"
      >
        <StyledImage src={UkIcon} alt="English" />
      </StyledContent>
    </StyledWrapper>
  );
};
