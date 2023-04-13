import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/AuthSelectors';
import Button from 'shared/ButtonForm/ButtonForm';
//import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../../../redux/auth/auth-operations';

// import { getUser } from '../../../redux/auth/auth-selectors';

// import styles from './navbar-user.module.scss';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  console.log(name);
  //   const dispatch = useDispatch();

  //   const onLogout = () => {
  //     dispatch(logout());
  //   };

  return (
    <div>
      You entered to PhoneBook with name: {name}
      {/* | email: {email} */}
      <Button
      //   onClick={onLogout}
      >
        LogOut
      </Button>
    </div>
  );
};

export default NavbarUser;
