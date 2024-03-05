import LeftAuthor from './components/LeftAuth';
import SignInRight from './components/SignInRight';
import { LeftParent, SignInRoot } from './styles';


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

