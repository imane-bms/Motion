
import styled from "styled-components";
import LeftAuthor from "./components/LeftAuth";
import SignInRight from "./components/SignInRight";

const LeftParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const SignInRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: normal;
`;

const SignIn = () => {
  return (
    <SignInRoot>
      <LeftParent>
        <LeftAuthor />
        <SignInRight />
      </LeftParent>
    </SignInRoot>
  );
};

export default SignIn;
