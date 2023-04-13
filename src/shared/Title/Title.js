import PropTypes from 'prop-types';
import { Wrap } from './Title.styled';

export const Title = ({ children }) => {
  return (
    <Wrap>
      <h2>{children}</h2>
    </Wrap>
  );
};

Title.protoTypes = {
  children: PropTypes.node.isRequired,
};
