import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.wrap}>
      <NavLink to="/register" className={styles.link}>
        <span>Register In</span>
      </NavLink>

      <NavLink to="/login" className={styles.link}>
        <span>Log In</span>
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
