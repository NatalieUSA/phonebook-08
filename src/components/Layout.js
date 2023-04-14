import styled from 'styled-components';

export const Layout = styled.div`
  color: deepgrey;
  margin-right: auto;
  margin-left: auto;
  /* width: 1000px; */
  font-size: 10px;

  @media (max-width: 767px) {
    font-size: 11px;
    width: 320px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
    width: 720px;
  }

  @media (min-width: 1020px) {
    width: 1000px;
    font-size: 15px;
    padding: 16px;
  }
`;
