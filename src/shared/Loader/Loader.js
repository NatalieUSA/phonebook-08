import { Dna } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loader = () => (
  <Wrap>
    <Dna
      visible={true}
      height="380"
      width="380"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </Wrap>
);
