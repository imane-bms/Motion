import styled from "styled-components";
import * as palette from '../Variables';
import { GradientButton } from "../../../styles";
import { Link } from "react-router-dom";


// ********* RIGHT *********


// export const Link = styled.div`
//   position: relative;
// `;

 export const SignUpText = styled(Link)`
   position: relative;
   font-size: ${palette.fontSize3Xs};
   letter-spacing: 1px;
   text-transform: uppercase;
   font-family: ${palette.fontRoboto};
   color: ${palette.colorBlack};
   text-align: center;
   text-decoration: none;
 `;

 export const SignUpButton = styled.button`
  cursor: pointer;
  border: 1px solid ${palette.colorGray500};
  padding: ${palette.paddingSm} ${palette.padding15Xl} ${palette.paddingSm} ${palette.padding19Xl};
  background-color: transparent;
  border-radius: ${palette.br31Xl};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: ${palette.colorDarkslategray200};
    border: 1px solid ${palette.colorDarkslategray100};
    box-sizing: border-box;
  }
`;

export const GradientButtonBetterStyled = styled(GradientButton)`
  background-image: var(--linearGradient);
  color: white;
  transition: opacity 0.3s ease;
  border-radius: ${palette.br11Xl};
  padding: ${palette.padding4Xl} ${palette.paddingXl};
  align-self: stretch;
  &:hover {
    opacity: 0.9;
  }
`
export const GradientButtonText = styled.p`
  font-size: ${palette.fontSizeXs};
  font-family: ${palette.fontRoboto};
  letter-spacing: 1px;
`
export const PageH1 = styled.h1`
  margin: 0;
  position: relative;
  font-size: ${palette.fontSize21Xl};
  font-weight: 300;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
  font-size: ${palette.fontSize5Xl};
  };
  @media screen and (max-width: 450px) {
  font-size: ${palette.fontSize5Xl};
  };
  
`;
  

export const NoUserGroup = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 1.5rem;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

export const NoUserQuestion = styled.p`
  text-align: center;
  font-size: 0.8rem;
`;

//export const SignUpButton = styled(SimpleButton)`
  //font-size: 0.8rem;
  //border: 0;
//`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
   /*justify-content: flex-start; 
   max-width: 100%; 
   width: 21.25rem; */
`;


export const Inputs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;

  @media screen and (max-width: 450px) {
    gap: 3rem 0;
  }

  /* min-height: 25rem; */

`;

export const InputGroup = styled.div`
  min-width: 60%;
  border-bottom: 1px solid ${palette.colorGray400};
  display: flex;
  align-items: center;

  //flex-direction: row; 
  //justify-content: flex-start; 
  padding: 0 0 1rem 0;
  gap: 0 1rem;
`;


export const Input = styled.input`

  font-size: ${palette.fontSizeBase};
  color: ${palette.colorBlack};
  border: none;
  outline: none;
  width: 100%;
  height: 100%;

   //background: transparent;
  margin-left: 1rem;
  width: ${(p) => p.propWidth3};
  padding: ${(p) => p.propPadding1};
  gap: ${(p) => p.propGap1}; 
`;

export const GroupIcon = styled.img`
   height: 1.5rem;
  width: 1.5rem; 
  `;
  /* position: relative;
  object-fit: cover; `;*/

  export const PageDots = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 1rem;
`;

export const OvalIcon = styled.img`
  height: 0.5rem;
  width: 0.5rem;
  position: relative;
  min-height: 0.5rem;
  
`;

export const ButtonFrame = styled.div`
width: 18rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 3.375rem 0rem;
`;
/*@media screen and (max-width: 450px) {
  gap: 3.375rem 0rem;
}*/



// const Link2 = styled.div`
//   position: relative;
//   font-size: ${palette.fontSizeXs};
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   font-family: ${palette.fontRoboto};
//   color: ${palette.colorWhite};
//   text-align: center;
// `;
// const Button1 = styled.div`
//   align-self: stretch;
//   border-radius: ${palette.br11Xl};
//   background: linear-gradient(132.96deg, #c468ff, #6e91f6);
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: center;
//   padding: ${palette.padding4Xl} ${palette.paddingXl};
//   white-space: nowrap;
// `;

// const ButtonFrame = styled.button`
//   cursor: pointer;
//   border: none;
//   padding: 0;
//   background-color: transparent;
//   width: 18rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 3.375rem 0rem;
//   @media screen and (max-width: 450px) {
//     gap: 3.375rem 0rem;
//   }
// `;


