
import passwordIcon from "../../../assets/svgs/password.svg";
import userIcon from "../../../assets/svgs/avatar.svg";

import { RightRoot } from "../styles";
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
  ButtonFrame,
  PageH1,
  SignUpText
} from "./stylesRight";


const SignInRight = (props) => {
  return (
    <RightRoot>
      <NoUserGroup>
        <NoUserQuestion>{`Don't have an account?`}</NoUserQuestion>
        <SignUpButton 
        as={SignUpText} 
        onClick={() => {props.setLogged('register')}} 
        value="Sign Up">
        SIGN UP
        </SignUpButton>
      </NoUserGroup>

      <AuthForm action='#' method='post'>
        <PageH1>Sign In</PageH1>

        <Inputs>
          <InputGroup>
            <GroupIcon alt="" src={userIcon} />
            <Input 
            onChange={(e) => {props.setEmail(e.target.value)}} 
            value={props.email} 
            required 
            type="email" 
            placeholder="Email" />
          </InputGroup>
          
          <InputGroup>
            <GroupIcon loading="lazy" alt="" src={passwordIcon} />
            <Input  
            onChange={(e) => {props.setPassword(e.target.value)}} 
            value={props.password} 
            required 
            type="password" 
            placeholder="Password" />
          </InputGroup>
        </Inputs>

        <ButtonFrame>
        <GradientButtonBetterStyled 
        onClick={props.submitLoginForm} 
        className="button submit">
        <GradientButtonText>Sign In
        </GradientButtonText></GradientButtonBetterStyled>
        </ButtonFrame>

        </AuthForm>
    </RightRoot>
  );
};

export default SignInRight;
