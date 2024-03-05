import pathIcon from "../../../assets/svgs/path_oval_icon.svg";
import emptyPathIcon from "../../../assets/svgs/path_oval_icon_empty.svg"

import { RightRoot } from "../styles";
import {
    GradientButtonBetterStyled,
    GradientButtonText,
    PageH1,
    ButtonFrame,
    OvalIcon,
    PageDots
} from "./stylesRight";

import {
    StyledForm, 
    InputGroupForVerification,
    BetterInput,
} from "./stylesVerification";



const VerificationRight = () => {
    return (
        <RightRoot>
            <PageH1>Verification</PageH1>
    
            <StyledForm>

            <InputGroupForVerification>
                <BetterInput type="text" placeholder="Validation Code" required />
            </InputGroupForVerification>

            <InputGroupForVerification>
                <BetterInput type="email" placeholder="Email" required /> 
               <BetterInput type="text" placeholder="Username" required />
            </InputGroupForVerification>

            <InputGroupForVerification>
                <BetterInput type="text" placeholder="First Name" required />
                <BetterInput type="text" placeholder="Last Name" required />
            </InputGroupForVerification>

            <InputGroupForVerification>
                <BetterInput type="password" placeholder="Password" required />
                <BetterInput type="password" placeholder="Password Repeat" required />
            </InputGroupForVerification>
            </StyledForm>
            <ButtonFrame>
                <GradientButtonBetterStyled><GradientButtonText>CONTINUE
                </GradientButtonText></GradientButtonBetterStyled>
            </ButtonFrame>

            <PageDots>
                <OvalIcon loading="lazy" alt="" src={emptyPathIcon} />
                <OvalIcon loading="lazy" alt="" src={emptyPathIcon} />
                <OvalIcon loading="lazy" alt="" src={pathIcon}/>
            </PageDots>            
        </RightRoot>
      );
    };
export default VerificationRight;
