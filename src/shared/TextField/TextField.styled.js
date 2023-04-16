import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: overlay;
  gap: 10px;
  box-sizing: border-box;
  list-style: none;
  margin: 30px auto;
`;

export const InputStyled = styled.input`
  padding: 10px;
  border-radius: 25px;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid deeppink;
  outline: transparent;
  margin-right: auto;
  margin-left: auto;
  font-size: large;
  color: #68b4cf;
  box-shadow: inset 6px 6px 6px 0px #68b4cf, inset -6px -10px 10px 0px #68b4cf;
  background-color: deeppink;
`;
