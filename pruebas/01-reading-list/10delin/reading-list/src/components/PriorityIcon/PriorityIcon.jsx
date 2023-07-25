import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPriorityIcon = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: -15px;
  left: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  font-size: 1rem;
  background-color: ${({ priority }) =>
    priority === 2 ? "#F44336" : priority === 1 ? "#FFC107" : "#989999"};
  border-radius: 50%;
  z-index: 1;
`;

const priorityName = (priority) => {
  switch (priority) {
    case 2:
      return "⬆";
    case 1:
      return "➡";
    case 0:
      return "⬇";
    default:
      return 1;
  }
};

export const PriorityIcon = ({ priority }) => {
  return (
    <StyledPriorityIcon priority={priority}>
      {priorityName(priority)}
    </StyledPriorityIcon>
  );
};

PriorityIcon.propTypes = {
  priority: PropTypes.oneOf(["high", "medium", "low"]),
};
