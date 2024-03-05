import emailIcon from "../../../assets/images/mail_icon.png";
import { RightRoot } from "../styles";
import pathIcon from "../../../assets/svgs/path_oval_icon.svg";
import emptyPathIcon from "../../../assets/svgs/path_oval_icon_empty.svg"

import {
  AuthForm,
  GroupIcon,
  Input,
  InputGroup,
  Inputs,
  NoUserGroup,
  NoUserQuestion,
  SignUpButton,
  GradientButtonBetterStyled,
  GradientButtonText,
  PageDots,
  OvalIcon,
  ButtonFrame
  } from "./stylesRight";



const SignUpRight = () => {
  return (
    <RightRoot>
      <NoUserGroup>
        <NoUserQuestion>{'Already have an account?'}</NoUserQuestion>
        <SignUpButton>SIGN IN</SignUpButton>
      </NoUserGroup>

      <AuthForm>
        <h2>Sign Up</h2>

        <Inputs>
          <InputGroup>
            <GroupIcon alt="" src={emailIcon} />
            <Input type="email" placeholder="Email" />
          </InputGroup>  
        </Inputs>
        <ButtonFrame>
            <GradientButtonBetterStyled><GradientButtonText>Sign Up
            </GradientButtonText></GradientButtonBetterStyled>

            <PageDots>
              <OvalIcon loading="lazy" alt="" src={pathIcon} />
              <OvalIcon loading="lazy" alt="" src={emptyPathIcon} />
              <OvalIcon loading="lazy" alt="" src={emptyPathIcon}/>
            </PageDots>
        </ButtonFrame>
      </AuthForm>
      </RightRoot>
      
  );
};

export default SignUpRight;
