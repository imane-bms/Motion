import styled from "styled-components";

const Link = styled.div`
  position: relative;
`;
const Link1 = styled.div`
  position: relative;
  font-size: var(--font-size-3xs);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: var(--font-roboto);
  color: var(--color-black);
  text-align: center;
`;
const Button = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-gray-300);
  padding: var(--padding-sm) var(--padding-15xl) var(--padding-sm)
    var(--padding-19xl);
  background-color: transparent;
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: var(--color-darkslategray-200);
    border: 1px solid var(--color-darkslategray-100);
    box-sizing: border-box;
  }
`;
const Buttons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0rem 1.125rem;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Description = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-21xl);
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const GroupIcon = styled.img`
  height: 1.5rem;
  width: 1.544rem;
  position: relative;
  object-fit: cover;
`;
const Input = styled.input`
  outline: none;
  font-family: var(--font-roboto);
  font-size: var(--font-size-base);
  color: var(--color-black);
  border: none;
  width: 100%;
  height: 100%;
  background: transparent;
  margin-left: 24.7px;
  width: ${(p) => p.propWidth3};
  padding: ${(p) => p.propPadding1};
  gap: ${(p) => p.propGap1};
`;
const InputUser = styled.div`
  width: 18rem;
  border-bottom: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-base);
  gap: 0rem 1.375rem;
`;

const Inputs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.313rem 0rem;
  min-height: 25.438rem;
  @media screen and (max-width: 450px) {
    gap: 3.313rem 0rem;
  }
`;
const Link2 = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: var(--font-roboto);
  color: var(--color-white);
  text-align: center;
`;
const Button1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background: linear-gradient(132.96deg, #c468ff, #6e91f6);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-4xl) var(--padding-xl);
  white-space: nowrap;
`;

const ButtonFrame = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.375rem 0rem;
  @media screen and (max-width: 450px) {
    gap: 3.375rem 0rem;
  }
`;
const Form = styled.div`
  width: 21.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  font-size: var(--font-size-base);
`;
const RightRoot = styled.div`
    height: 100vh;
    width: 60%;
  flex: 1;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-21xl);
  box-sizing: border-box;
  gap: 7.875rem 0rem;
  min-width: 35.125rem;
  min-height: 50rem;
  max-width: 100vh;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-family: var(--font-roboto);
  @media screen and (max-width: 1125px) {
    min-height: auto;
  }
  @media screen and (max-width: 1050px) {
    gap: 7.875rem 0rem;
  }
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 7.875rem 0rem;
  }
`;

const SignInRight = () => {
  return (
    <RightRoot>
      <Buttons>
        <Link>Don't have an account?</Link>
        <Button>
          <Link1>SIGN UP</Link1>
        </Button>
      </Buttons>
      <Form>
        <Inputs>
          <Description>Sign In</Description>
          <InputUser>
            <GroupIcon alt="" src="/sign_in_profile_icon.png" />
            <Input type='email' placeholder="Email"/>
          </InputUser>
          <InputUser>
            <GroupIcon loading="lazy" alt="" src="/password.png" />
            <Input type='password' placeholder="Password" />
          </InputUser>
          </Inputs>
        <ButtonFrame>
          <Button1>
            <Link2>SIGN IN</Link2>
          </Button1>
        </ButtonFrame>
      </Form>
    </RightRoot>
  );
};

export default SignInRight;
