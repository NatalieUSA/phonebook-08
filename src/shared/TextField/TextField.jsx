import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Wrapper, InputStyled } from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Wrapper>
      <label htmlFor={id}></label>
      <InputStyled id={id} onChange={handleChange} {...props} />
    </Wrapper>
  );
};

export default TextField;
