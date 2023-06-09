import styled from 'styled-components';

export const Wrap = styled.div`
  color: deeppink;

  margin-top: 80px;
  margin-left: 10px;
  line-height: 1.6;
`;

export const Button = styled.button`
  text-align: center;
  margin: 30px 0px 50px 10px;
  height: 70px;
  width: 70px;
  border-radius: 50px;
  cursor: pointer;
  font-size: small;
  text-transform: uppercase;
  background-color: #01e8f8;
  color: deeppink;
  border-style: none;
  box-shadow: 3px 3px 3px grey;

  &:hover {
    background-color: rgb(250, 246, 9);
    color: deeppink;
    font-weight: bold;
  }
`;
