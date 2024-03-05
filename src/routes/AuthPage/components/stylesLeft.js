import styled from "styled-components";

import * as palette from '../Variables';
import { ButtonBase } from "../../../styles";



// ********* LEFT ********* 

// export const LogoIcon = styled.img`
//   width: 100%;
//   height: 100%; 
//   object-fit: contain;
//   position: absolute;
//   left: 0rem;
//   top: 0.625rem;
//   transform: scale(1.75);
// `;

// export const WrapperLogoIcon = styled.div`
//   width: 5rem;
//   height: 5rem;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;


// export const Motion = styled.h2`
//   margin: 0;
//   align-self: stretch;
//   position: relative;
//     font-weight: 500;

//   /* font-size: inherit;
//   letter-spacing: 0.75px; */
//   /* font-family: inherit; */
//   @media screen and (max-width: 1050px) {
//     font-size: ${palette.fontSize5Xl};
//   }
//   @media screen and (max-width: 450px) {
//     font-size: ${palette.fontSizeLg};
//   }
// `;


export const Logo = styled.div`
  /* width: 12.938rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem 0;
`;


// export const P = styled.div`
//   width: 16.25rem;
//   position: relative;
//   font-size: ${palette.fontSizeBase};
//   line-height: 1.5rem;
//   font-weight: 500;
//   color: ${palette.colorGray100};
//   display: inline-block;
//   mix-blend-mode: normal;
// `;

// export const CombinedShapeIcon = styled.img`
//   align-self: stretch;
//   height: 1rem;
//   position: relative;
//   max-width: 100%;
//   overflow: hidden;
//   flex-shrink: 0;
// `;

export const StoreIcon = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid ${palette.colorGray200};
  background-color: transparent;
  padding: 0.8rem 1.6rem;

  &:hover {
    border: 1px solid white;
  }

  /* cursor: pointer;
  padding: ${palette.padding3Xs};
  flex: 1;
  border-radius: ${palette.br11Xl}; */
`;

// export const CombinedShapeIcon1 = styled.img`
//   align-self: stretch;
//   height: 1rem;
//   position: relative;
//   max-width: 100%;
//   overflow: hidden;
//   flex-shrink: 0;
// `;


export const StoreContainer = styled.div`
  /* width: 13.438rem; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 0.75rem;
`;


export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.875rem 0rem;
`;


export const SocialIcon = styled.img`
  height: 2.3rem;
  width: 2.3rem;
  position: relative;
  /* min-height: 2.5rem; */
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0rem 1rem;
  opacity: 0.5;
  cursor: pointer;

  /* flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  mix-blend-mode: normal; */
`;

// export const Motion2018All = styled.div`
//   position: relative;
// `;

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem 0;
  /* font-size: ${palette.fontSizeXs}; */
`;

export const Description = styled.p`
  max-width: 70%;
  font-weight: 400;
  text-align: center;
  font-size: 1rem;

  /* margin: 0;
  align-self: stretch;
  position: relative;
  font-size: ${palette.gap21Xl};
  font-family: inherit;

  @media screen and (max-width: 1050px) {
    font-size: ${palette.fontSize13Xl};
  }
  @media screen and (max-width: 450px) {
    font-size: ${palette.fontSize5Xl};
  } */
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 0.8rem;

  /* margin: 0;
  align-self: stretch;
  position: relative;
  font-size: ${palette.gap21Xl};
  font-family: inherit;

  @media screen and (max-width: 1050px) {
    font-size: ${palette.fontSize13Xl};
  }
  @media screen and (max-width: 450px) {
    font-size: ${palette.fontSize5Xl};
  } */
`;