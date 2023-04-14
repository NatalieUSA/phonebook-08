import { useSelector, useDispatch } from 'react-redux';
import { getUser, isLoggedIn } from 'redux/auth/AuthSelectors';
import { logout } from 'redux/auth/AuthOperations';
import Button from 'shared/ButtonForm/ButtonForm';
import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { name, email } = useSelector(getUser);
  const isLogin = useSelector(isLoggedIn);
  console.log(isLogin);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrap}>
      name: {name} email: {email}
      {isLogin && (
        <Button
          onClick={() => {
            dispatch(logout());
          }}
        >
          LogOut
        </Button>
      )}
      {/* {!isLogin && <Navigate to="/" />} */}
    </div>
  );
};

export default NavbarUser;

// import { logout } from 'redux/auth/AuthOperations';
// import Button from 'shared/ButtonForm/ButtonForm';

// const NavbarUser = () => {
//   const { name, email } = useSelector(getUser);
//   const dispatch = useDispatch();

//   const onLogout = () => {
//     dispatch(logout());
//   };
//   console.log(name, email);

//   return (
//     <div>
//       You entered to PhoneBook with name: {name}| email: {email}
//       <Button onClick={onLogout}>LogOut</Button>
//     </div>
//   );
// };

// export default NavbarUser;
