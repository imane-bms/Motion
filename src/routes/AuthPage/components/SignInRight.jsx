
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
  SignUpText,
} from "./stylesRight";


const SignInRight = () => {
  return (
    <RightRoot>
      <NoUserGroup>
        <NoUserQuestion>{`Don't have an account?`}</NoUserQuestion>
        <SignUpButton as={SignUpText} to="/signup">SIGN UP</SignUpButton>
      </NoUserGroup>

      <AuthForm>
        <PageH1>Sign In</PageH1>

        <Inputs>
          <InputGroup>
            <GroupIcon alt="" src={userIcon} />
            <Input type="email" placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <GroupIcon loading="lazy" alt="" src={passwordIcon} />
            <Input type="password" placeholder="Password" />
          </InputGroup>
        </Inputs>
        <ButtonFrame>
          <GradientButtonBetterStyled><GradientButtonText>
          Sign In
          </GradientButtonText></GradientButtonBetterStyled>
        </ButtonFrame>
        </AuthForm>
    </RightRoot>
  );
};

export default SignInRight;
