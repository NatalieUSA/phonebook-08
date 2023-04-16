// import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/Hooks';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import items from './items';
// import Button from 'shared/ButtonForm/ButtonForm';
// import styles from './nav-bar.module.css';
import { NavLinkStyled, Wrapper, Menu } from './NavBar.styled';
import { ButtonForm } from 'shared/ButtonForm/ButtonForm.styled';

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  const filteredItems = !isLoggedIn
    ? items.filter(item => !item.private)
    : items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLinkStyled to={link}>
        <ButtonForm>{text}</ButtonForm>
      </NavLinkStyled>
    </li>
  ));

  return (
    <Wrapper>
      <Menu>{elements}</Menu>
      {isLoggedIn ? <NavbarUser /> : <NavbarAuth />}
    </Wrapper>
  );
};

export default Navbar;

// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'shared/Hooks';
// import NavbarAuth from './NavbarAuth/NavbarAuth';
// import NavbarUser from './NavbarUser/NavbarUser';

// import items from './items';
// import Button from 'shared/ButtonForm/ButtonForm';
// import styles from './nav-bar.module.css';

// const Navbar = () => {
//   const { isLoggedIn } = useAuth();
//   console.log(isLoggedIn);
//   const filteredItems = !isLoggedIn
//     ? items.filter(item => !item.private)
//     : items;
//   const elements = filteredItems.map(({ id, text, link }) => (
//     <li key={id}>
//       <NavLink className={styles.link} to={link}>
//         <Button>{text}</Button>
//       </NavLink>
//     </li>
//   ));

//   return (
//     <div className={styles.navbar}>
//       <ul className={styles.menu}>{elements}</ul>
//       {isLoggedIn ? <NavbarUser /> : <NavbarAuth />}
//     </div>
//   );
// };

// export default Navbar;
