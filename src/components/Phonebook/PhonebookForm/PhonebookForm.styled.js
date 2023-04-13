import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: overlay;
  gap: 10px;
  width: 55%;
  height: 15%;
  box-sizing: border-box;
  list-style: none;
  margin: 30px auto;
  padding: 40px;
  background-color: #ffa928;
  // border-radius: 25px;
  border-radius: 1px;
  box-shadow: inset 6px 10px 1px 0px red, inset -6px -10px 1px 0px blue;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / 8%); /* цвет бегунка */
    border-radius: 3px; /* округлось бегунка */
    border: 2px solid #cd5a79; /* отступ вокруг бегунка */
  }

  @media (max-width: 419px) {
    width: 95%;
  }
  @media (min-width: 420px) {
    width: 75%;
  }
  @media (min-width: 768px) {
    width: 65%;
  }
  @media (min-width: 1020px) {
    width: 60%;
  }
`;

export const Input = styled.input`
  width: 80%;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid yellow;

  outline: transparent;
  margin-right: auto;
  margin-left: auto;
  font-size: large;
  color: yellow;

  @media (max-width: 320px) {
    width: 95%;
  }
`;

export const Label = styled.label``;

export const FormBtn = styled.button`
  text-align: center;
  margin-top: 30px;
  height: 50px;
  width: 140px;
  // border-radius: 50px;
 cursor: pointer;

  font-size: small;
  text-transform: uppercase;
 
  background-color: orange;
  color: white;

  border-style: none;
  box-shadow: 3px 3px 3px grey;
  
  :hover {
  text-transform: lowercase;
  background-color: deeppink;
  color: white;


`;
