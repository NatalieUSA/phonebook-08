import styled from 'styled-components';

export const ButtonForm = styled.button`
  text-align: center;
  margin-top: 30px;
  height: 90px;
  width: 90px;
  border-radius: 50px;
  cursor: pointer;
  font-size: small;
  text-transform: uppercase;
  background-color: rgb(250, 9, 137);
  color: #68b4cf;
  border-style: none;
  box-shadow: 3px 3px 3px grey;

  &:hover {
    background-color: #01e8f8;
    color: deeppink;
    font-weight: bold;
  }
`;
