import styled, { keyframes } from 'styled-components';
import { RightRoot } from "../../routes/AuthPage/styles";

// Define a keyframe animation for the spinner rotation
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const StyledSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Spinner = () => {
  return (
    <RightRoot>
      <StyledSpinner />
    </RightRoot>
  );
};

export default Spinner;
