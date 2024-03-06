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
  ButtonFrame,
  PageH1,
  SignUpText
  } from "./stylesRight";


  const SignUpRight = (props) => {
    return (

    <RightRoot>
      <NoUserGroup>
        <NoUserQuestion>{'Already have an account?'}</NoUserQuestion>
          <SignUpButton as={SignUpText} onClick={() => props.setLogged("login")}>
          SIGN IN
          </SignUpButton>
        </NoUserGroup>

      <AuthForm>
        <PageH1>Sign Up</PageH1>
        

        <Inputs>
          <InputGroup>
            <GroupIcon alt="" src={emailIcon} />
            
            <Input 
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              type="email" placeholder="Email" required/>
          </InputGroup>  
        </Inputs>
        <ButtonFrame>
            <GradientButtonBetterStyled onClick={props.submitEmailForm}><GradientButtonText>CONTINUE
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
