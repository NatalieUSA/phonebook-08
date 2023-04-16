import styled from 'styled-components';

export const Wrap = styled.div`
  /* width: 500px; */
  width: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
  height: 450px;
  text-align: center;
  width: 90%;
  background-color: rgb(255, 20, 147, 0.8);
  /* background-color: deeppink; */
  border-radius: 25px;
  box-shadow: inset 6px 6px 6px 0px #68b4cf, inset -6px -10px 10px 0px #68b4cf;

  @media (min-width: 420px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 95%;
    padding: 55px;
  }
  @media (min-width: 1020px) {
    width: 100%;
    padding: 150px;
  }
`;
