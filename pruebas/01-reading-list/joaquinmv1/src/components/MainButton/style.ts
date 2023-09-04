import styled  from "styled-components";

export const Button = styled.button`
  background-color: #695EFF;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0 auto;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover:hover,
  &:hover:focus {
  opacity: .75;
}
`