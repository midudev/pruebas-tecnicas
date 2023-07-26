import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ option }) =>
    option === "sum" ? "#F44336" : option === "res" ? "#FFC107" : "#838383"};
  color: white;
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: ${({ option }) =>
      option === "sum" ? "#ff1100" : option === "res" ? "#b68903" : "#000"};
  }

  &:disabled {
    background-color: #bdbdbd;
    color: #a7a7a7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 5px 5px;
  }
`;

export const PriorityButton = ({
  setPriority,
  dataCy,
  disabledPrio,
  label,
  option,
}) => {
  const changePriority = (option) => {
    if (option === "sum") {
      setPriority((prevPriority) => prevPriority + 1);
    }
    if (option === "res") {
      setPriority((prevPriority) => prevPriority - 1);
    }
  };

  return (
    <StyledButton
      data-cy={dataCy}
      disabled={disabledPrio}
      option={option} // Pasamos la prop 'option' al componente StyledButton
      onClick={() => changePriority(option)}
    >
      {label}
    </StyledButton>
  );
};

PriorityButton.propTypes = {
  setPriority: PropTypes.func.isRequired,
  dataCy: PropTypes.string.isRequired,
  disabledPrio: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};
