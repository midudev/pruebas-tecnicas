import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 0 20px 0;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #c02828;
  color: #ffffff;
  text-align: center;
  padding: 7px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  &:hover {
    background-color: #691212;
    color: #ffffff;
  }
`;

export const ResetApp = () => {
  const { t } = useTranslation();
  const onReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={onReset}>{t("home.resetApp")}</StyledButton>
    </StyledWrapper>
  );
};
