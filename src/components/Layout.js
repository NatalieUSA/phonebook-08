import styled from 'styled-components';

export const Layout = styled.div`
  color: deepgrey;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  font-size: 10px;

  @media (max-width: 767px) {
    font-size: 11px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1020px) {
    width: 80%;
    font-size: 15px;
    padding: 16px;
  }
`;
