import LeftAuthor from './components/LeftAuth';
import SignUpRight from './components/SignUpRight';
import { LeftParent, SignInRoot } from './styles';


const SignIn = () => {
  return (
    <SignInRoot>
      <LeftParent>
        <LeftAuthor />
        <SignUpRight />
      </LeftParent>
    </SignInRoot>
  );
};

export default SignIn;