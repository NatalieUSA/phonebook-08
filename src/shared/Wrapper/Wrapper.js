import PropTypes from 'prop-types';
import { Wrap } from './Wrapper.styled';

export const Wrapper = ({ children }) => {
  return (
    <Wrap>
      <h4>{children}</h4>
    </Wrap>
  );
};

Wrapper.protoTypes = {
  children: PropTypes.node.isRequired,
};
