import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px;
  display: inline-block;
  text-align: center;
  margin-top: 30px;
  position: relative;

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
  span {
    position: absolute;
    transform: translateY(70%) translateX(-50%);
  }

  &.active {
    font-weight: bold;
    background-color: rgb(250, 246, 9);
    color: deeppink;
  }
`;

export const Wrap = styled.div`
  margin-top: 100px;
`;
