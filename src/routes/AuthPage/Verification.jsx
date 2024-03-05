import LeftAuthor from './components/LeftAuth';
import VetrificationRight from "./components/VerificationRight";


import { LeftParent, SignInRoot } from './styles';

const Verification = () => {
  return (
    <SignInRoot>
      <LeftParent>
      <LeftAuthor />
      <VetrificationRight/>
      </LeftParent>
    </SignInRoot>
  );
};

export default Verification;