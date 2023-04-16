import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
  text-decoration: none;

  &.active {
    color: #e84a5f;
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 115px;
  background-color: rgb(2, 221, 250);
  box-shadow: 0px 0px 8px 0px rgb(61, 61, 61);
`;

export const Menu = styled.ul`
  margin: 0 auto;
`;

///////
/* .layout {
  background: deeppink;
  background-image: url('https://images.fineartamerica.com/images-medium-large-5/pop-art-comic-book-mouth-of-woman-drante.jpg');
}

.welcome {
  padding: 24px;
  min-height: 160px;
  background-color: rgba(2, 11, 51, 0.8);
  border-radius: 10px;
  max-width: 600px;
  margin: auto auto;
  /* // padding: 24,
  // minHeight: 360,
  // background: 'rgba(255, 255, 255, 0.7)',
  // // background: '#d6d4d4',
  // */

// .welcomeText {
//   font-size: 10px;
//   color: white;
//   text-align: center;
// }
