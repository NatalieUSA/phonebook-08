import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/AuthOperations';
import { useAuth } from 'shared/Hooks';

import { Wrap, Button } from './NavbarUser.styled';

const NavbarUser = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrap>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logout())}>
        Log Out
      </Button>
    </Wrap>
  );
};
export default NavbarUser;
