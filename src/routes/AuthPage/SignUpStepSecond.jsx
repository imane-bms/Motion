import LeftAuthor from './components/LeftAuth';
import SignUpStepSecondRight from './components/SignUpStepSecondRight';
import { LeftParent, SignInRoot } from './styles';


const SignIn = () => {
  return (
    <SignInRoot>
      <LeftParent>
        <LeftAuthor />
        <SignUpStepSecondRight />
      </LeftParent>
    </SignInRoot>
  );
};

export default SignIn;