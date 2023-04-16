import { GlobalStyle } from 'components/GlobalStyle';
import { Wrapper } from 'shared/Wrapper/Wrapper';

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <p>It`s Your Secret</p>
        <p>PhoneBook</p>
        <p>First step - you need to register</p>
        <p>if you are already registered - enter your login</p>
        <p>Your secret contacts will be securely protected</p>
      </Wrapper>
    </>
  );
};

export default HomePage;
