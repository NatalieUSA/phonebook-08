import styled from 'styled-components';

export const Wrap = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 5px;
  background-color: deeppink;
  border-radius: 25px;
  box-shadow: inset 6px 6px 6px 0px #68b4cf, inset -6px -10px 10px 0px #68b4cf;
  @media (max-width: 419px) {
    width: 95%;
  }
  @media (min-width: 420px) {
    width: 85%;
  }
  @media (min-width: 768px) {
    width: 65%;
  }
  @media (min-width: 1240px) {
    width: 60%;
  } ;
`;
