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



const VerificationRight = (props) => {
    return (
        <RightRoot>
            <PageH1>Verification</PageH1>
    
            <StyledForm>

            <InputGroupForVerification>
                <BetterInput 
                value={props.code}
                onChange={(e) => props.setCode(e.target.value)}
                type="text" 
                placeholder="Validation code"                 
                required />
            </InputGroupForVerification>

            <InputGroupForVerification>
                <BetterInput
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                type="email" 
                placeholder="Email"                
                required /> 
               <BetterInput
               value={props.userName}
               onChange={(e) => props.setUserName(e.target.value)}
               type="text" 
               placeholder="Username" 
               required
               />
            </InputGroupForVerification>

            <InputGroupForVerification>
                <BetterInput
                value={props.firstName}
                onChange={(e) => props.setFirstName(e.target.value)}
                type="text" 
                placeholder="First Name" 
                required />
                <BetterInput 
                value={props.lastName}
                onChange={(e) => props.setLastName(e.target.value)}
                type="text" 
                placeholder="Last Name" 
                required />
            </InputGroupForVerification>

            <InputGroupForVerification>
                <BetterInput
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
                type="password" 
                placeholder="Password"
                required />
                <BetterInput
                value={props.repeatPassword}
                onChange={(e) => props.setRepeatPassword(e.target.value)}
                type="password" 
                placeholder="Password Repeat" 
                required />
            </InputGroupForVerification>
            </StyledForm>
            <ButtonFrame>
                <GradientButtonBetterStyled
                onClick={props.submitRegisterForm}
                ><GradientButtonText>COMPLETE
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
