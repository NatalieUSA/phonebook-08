import { NavLinkStyled, Wrap } from './NavbarAuth.styled';

const NavbarAuth = () => {
  return (
    <Wrap>
      <NavLinkStyled to="/register">
        <span>Register In</span>
      </NavLinkStyled>

      <NavLinkStyled to="/login">
        <span>Log In</span>
      </NavLinkStyled>
    </Wrap>
  );
};

export default NavbarAuth;
