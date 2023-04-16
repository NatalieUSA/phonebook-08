import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  align-items: center;

  overflow: overlay;
  gap: 10px;
  width: 65%;
  height: 15%;
  box-sizing: border-box;
  list-style: none;
  margin: 10px auto;
  padding: 40px;

  background-color: rgb(255, 255, 0, 0.9);
  border-radius: 25px;
  box-shadow: inset 6px 6px 6px 0px #68b4cf, inset -6px -10px 10px 0px #68b4cf;

  @media (max-width: 419px) {
    width: 95%;
  }
  @media (min-width: 420px) {
    width: 85%;
  }
  @media (min-width: 768px) {
    width: 65%;
  }
  @media (min-width: 1240px) {
    width: 60%;
  }
`;

export const Input = styled.input`
  width: 80%;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid deeppink;

  outline: transparent;
  margin-right: auto;
  margin-left: auto;
  font-size: large;
  color: deeppink;
`;

export const Label = styled.label``;
