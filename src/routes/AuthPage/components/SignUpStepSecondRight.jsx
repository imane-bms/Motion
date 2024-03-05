import tickCircle from "../../../assets/svgs/tick_circle.svg";
import tick from "../../../assets/svgs/tick.svg";
import pathIcon from "../../../assets/svgs/path_oval_icon.svg";
import emptyPathIcon from "../../../assets/svgs/path_oval_icon_empty.svg"

import { RightRoot } from "../styles";
import {
   EmailSent,
   TickIcon, 
   Confirmation, 
   TickIcon1, 
   WrapperTick, 
   WrapperCircle,
   CircleIcon, 
  } from "./signUpSecondStepStyles";
import {
  GradientButtonBetterStyled,
  GradientButtonText,
  PageDots,
  OvalIcon,
  ButtonFrame,
  PageH1
  } from "./stylesRight";



const SignUpStepSecondRight = () => {
  return (
    <RightRoot>
        <PageH1>Congratulations!</PageH1>

        <Confirmation>
          <TickIcon1>
            <WrapperCircle>
              <CircleIcon alt="" src={tickCircle} />
              </WrapperCircle>
            <WrapperTick>
              <TickIcon loading="lazy" alt="" src={tick} />
            </WrapperTick>
           </TickIcon1>
        </Confirmation>
        
        <EmailSent>
          We’ve sent a confirmation code to your email 
          johnsmith@gmail.com
        </EmailSent>
      
        <ButtonFrame>
            <GradientButtonBetterStyled><GradientButtonText>CONTINUE
            </GradientButtonText></GradientButtonBetterStyled>

            <PageDots>
              <OvalIcon loading="lazy" alt="" src={emptyPathIcon} />
              <OvalIcon loading="lazy" alt="" src={pathIcon} />
              <OvalIcon loading="lazy" alt="" src={emptyPathIcon}/>
            </PageDots>
        </ButtonFrame>
      
      </RightRoot>
      
  );
};

export default SignUpStepSecondRight;