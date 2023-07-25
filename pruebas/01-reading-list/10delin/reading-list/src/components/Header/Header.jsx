import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledWrapper = styled.div`
  top: 0;
  left: 0;
  background-color: #314263;
  color: #ffffff;
  border-bottom: 2px solid #4e4e4e;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.6);
  padding: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
`;

export const Header = () => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledTitle>{t("home.title")}</StyledTitle>
    </StyledWrapper>
  );
};

export default Header;
