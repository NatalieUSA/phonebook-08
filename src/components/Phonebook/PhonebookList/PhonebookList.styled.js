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
  // max-height: 350px;
  box-sizing: border-box;
  list-style: none;
  margin: 0 auto;
  padding: 40px;
  border-radius: 1px;
  box-shadow: inset 6px 10px 1px 0px yellow, inset -6px -10px 1px 0px #68b4cf;
  // scrollbar == do not working in mozilla

  // &::-webkit-scrollbar {
  //   width: 17px;
  //   height: 5px;
  //   border-radius: 50px;
  //   margin-top: 20px;
  // }
  // &::-webkit-scrollbar-thumb {
  //   background-color: #68b4cf;
  //   border-radius: 50px;
  //   border: 2px solid #cd5a79;
  // }

  width: 55%;
  height: 15%;
  background-color: #f10684;
  color: yellow;
  margin-bottom: 30px;

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
