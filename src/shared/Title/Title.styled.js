import styled from 'styled-components';

export const Wrap = styled.div`
  width: 60%;
  margin: 30px auto;
  padding: 5px;
  background-color: red;
  border-radius: 1px;
  box-shadow: inset 6px 6px 1px 0px #68b4cf, inset -6px -10px 1px 0px #68b4cf;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / 8%); /* цвет бегунка */
    border-radius: 3px; /* округлось бегунка */
    border: 2px solid #cd5a79; /* отступ вокруг бегунка */
  }
`;
