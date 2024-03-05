import styled from "styled-components";
import * as palette from './Variables';
import backgroundPicture from '../../assets/images/background_image.png'



// ********* LEFT *********

export const LeftRoot = styled.div`
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: ${palette.padding21Xl};
  /* box-sizing: border-box;
  gap: 7.5rem 0rem; */

  background: linear-gradient(
      rgba(118, 38, 168, 0.616),
      rgba(110, 145, 246, 0.5)
    ),
    url(${backgroundPicture});

  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  font-size: ${palette.fontSize11Xl};
  color: ${palette.colorWhite};

    /* min-width: 36rem;
  max-width: 100%; */

  @media screen and (max-width: 1125px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    /* padding-top: ${palette.padding7Xl};
    padding-bottom: ${palette.padding7Xl}; */
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    /* gap: 7.5rem 0rem; */
  }
`;

export const LeftParent = styled.section`
  align-self: stretch;
  display: flex;
  max-width: 100%;

  /* flex-direction: row;
  align-items: center; */
  /* justify-content: flex-start; */
  /* row-gap: 20px; */
  
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;


// ********** RIGHT **********

export const RightRoot = styled.div`
  /* font-family: ${palette.fontRoboto}; */
  flex-grow: 1;
  height: 100vh;
  width: 60%;
  position: relative;
  background-color: ${palette.colorWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: ${palette.gap21Xl};

  /* box-sizing: border-box;
  gap: 7rem 0rem;
  min-width: 35.125rem;
  min-height: 50rem;
  max-width: 100vh;
  text-align: left;
  font-size: ${palette.fontSizeSm};
  color: ${palette.colorBlack};
  font-family: ${palette.fontRoboto}; */

  /* @media screen and (max-width: 1125px) {
    min-height: auto;
  }
  @media screen and (max-width: 1050px) {
    gap: 7rem 0rem;
  }
  @media screen and (max-width: 750px) {
    padding-top: ${palette.padding7Xl};
    padding-bottom: ${palette.padding7Xl};
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 7rem 0rem;
  } */
`;

export const SignInRoot = styled.div`
  width: 100%;
  /* position: relative; */
  background-color: ${palette.colorWhite};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;