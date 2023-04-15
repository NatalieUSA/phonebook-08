import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/AuthOperations';
import { useAuth } from 'shared/Hooks';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrap}>
      <p>Welcome, {user.name}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </button>
    </div>
  );
};
export default NavbarUser;
