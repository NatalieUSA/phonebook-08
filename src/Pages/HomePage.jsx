import { GlobalStyle } from 'components/GlobalStyle';
import { Wrapper } from 'shared/Wrapper/Wrapper';

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <p>It`s Your Secret</p>
        <p>PhoneBook</p>
        <p>First step - You need register</p>
        <p>if You already register - enter Your Login</p>
      </Wrapper>
    </>
  );
};

export default HomePage;
