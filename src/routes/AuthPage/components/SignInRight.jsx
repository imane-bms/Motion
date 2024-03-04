import styled from 'styled-components';
import * as palette from '../Variables';

const Link = styled.div`
  position: relative;
`;
const Link1 = styled.div`
  position: relative;
  font-size: ${palette.fontSize3Xs};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${palette.fontRoboto};
  color: ${palette.colorBlack};
  text-align: center;
`;
const Button = styled.button`
  cursor: pointer;
  border: 1px solid ${palette.colorGray300};
  padding: ${palette.paddingSm} ${palette.padding15Xl} ${palette.paddingSm} ${palette.padding19Xl};
  background-color: transparent;
  border-radius: ${palette.br31Xl};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: ${palette.colorDarkslategray200};
    border: 1px solid ${palette.colorDarkslategray100};
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
  font-size: ${palette.gap21Xl};
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  @media screen and (max-width: 1050px) {
    font-size: ${palette.fontSize13Xl};
  }
  @media screen and (max-width: 450px) {
    font-size: ${palette.fontSize5Xl};
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
  font-family: ${palette.fontRoboto};
  font-size: ${palette.fontSizeBase};
  color: ${palette.colorBlack};
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
  border-bottom: 1px solid ${palette.colorGray400};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem ${palette.paddingBase};
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
  font-size: ${palette.fontSizeXs};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${palette.fontRoboto};
  color: ${palette.colorWhite};
  text-align: center;
`;
const Button1 = styled.div`
  align-self: stretch;
  border-radius: ${palette.br11Xl};
  background: linear-gradient(132.96deg, #c468ff, #6e91f6);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: ${palette.padding4Xl} ${palette.paddingXl};
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
  font-size: ${palette.fontSizeBase};
`;
const RightRoot = styled.div`
    font-family: ${palette.fontRoboto};
  height: 100vh;
  width: 60%;
  flex: 1;
  background-color: ${palette.colorWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${palette.gap21Xl};
  box-sizing: border-box;
  gap: 7.875rem 0rem;
  min-width: 35.125rem;
  min-height: 50rem;
  max-width: 100vh;
  text-align: left;
  font-size: ${palette.fontSizeSm};
  color: ${palette.colorBlack};
  font-family: ${palette.fontRoboto};
  @media screen and (max-width: 1125px) {
    min-height: auto;
  }
  @media screen and (max-width: 1050px) {
    gap: 7.875rem 0rem;
  }
  @media screen and (max-width: 750px) {
    padding-top: ${palette.padding7Xl};
    padding-bottom: ${palette.padding7Xl};
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
            <Input type="email" placeholder="Email" />
          </InputUser>
          <InputUser>
            <GroupIcon loading="lazy" alt="" src="/password.png" />
            <Input type="password" placeholder="Password" />
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

