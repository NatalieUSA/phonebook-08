import styled from 'styled-components';

export const ListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  position: relative;
  display: block;
  overflow: overlay;

  box-sizing: border-box;
  list-style: none;
  margin: 0 auto;
  padding: 40px;
  border-radius: 25px;
  box-shadow: inset 6px 6px 6px 0px #68b4cf, inset -6px -10px 10px 0px #68b4cf;

  width: 55%;
  height: 15%;
  background-color: #f10684;
  color: yellow;
  margin-bottom: 30px;

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

export const Btn = styled.button`
  cursor: pointer;
  display: inline-block;
  outline: none;
  border-radius: 50px;
  background-color: #68b4cf;
  color: yellow;

  text-align: center;
  border-style: none;
  box-shadow: 2px 2px 1px grey;
  font-size: x-small;
  height: 35px;
  width: 50px;
  line-height: 1;

  :hover {
    text-transform: lowercase;
    background-color: yellow;
    color: #68b4cf;
  }
`;
