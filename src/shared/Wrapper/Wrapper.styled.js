import styled from 'styled-components';

export const Wrap = styled.div`
  width: 500px;
  margin: auto;
  padding: 15px;
  height: 80vh;
  text-align: center;

  background-color: deeppink;
  border-radius: 25px;
  box-shadow: inset 6px 6px 6px 0px #68b4cf, inset -6px -10px 10px 0px #68b4cf;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / 8%); /* цвет бегунка */
    border-radius: 3px; /* округлось бегунка */
    border: 2px solid #cd5a79; /* отступ вокруг бегунка */
  }
`;
