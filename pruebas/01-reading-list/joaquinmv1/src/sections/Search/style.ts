import styled from "styled-components";

export const SearchContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
  width: 100%;

  select {
    appearance: bottom;
    outline: none;
    box-shadow: none;
    padding: .5rem 2rem;
    margin-left: .7rem;
    border: 1px solid #000;
    outline: none;
    background-image: none;
    background-color: #695EFF;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 5px;
  }

  select option{
    background-color: #c2c2c2;
    color: #fff;
  }

  select option:checked {
  background-color: #7167ff;
  color: #fff;
}

  @media screen and (max-width: 750px) {
    flex-direction: column;
    width: 100%;
    select {
      width: 100%;

    }

    input{
      width: 80%;
    }
  }
`

export const ContainerInput = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const InputText = styled.input`
    padding: .5rem 1rem;
    border-radius: 10px;
    background-color: #6100FF;
    background-color: #695EFF;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    position: relative;
    color: #c2c2c2;

    ::placeholder {
    color: #bebebe;
    font-weight: bold;
  }
`