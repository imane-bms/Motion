import styled, { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {

    },
};

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  :root {
  /* colors */
    --color-gray-100: #f8f8f8; /* background color in figma */
    --color-gray-300: #f2f2f2; /* small gray elements and lines in figma */
    --blue: #2b5ae6;
    --purple: #bd40f2;
    --linearGradient: linear-gradient(102deg, var(--purple), var(--blue));
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', 'Open Sans', sans-serif;
  }

  #root {
    width: 100%;
    min-height: 80%;
  } 

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  max-width: 1240px; 
  margin: 0 auto;
`;

export const SectionContainer = styled.section`
  max-width: 1240px; 
  margin: 0 auto;
`;

// Divs used in User and Feed

export const BaseDiv = styled.div`
  border-radius: 6px;
  border: 0;
`;

export const DivWithShadow = styled(BaseDiv)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;


// Buttons — better styling is needed :)

export const ButtonBase = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 3rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px var(--purple);
  }
`

export const SimpleButton = styled(ButtonBase)`
  border: solid 1px var(--color-gray-300);
  color: black;

  &:hover {
    background: black;
    color: white;
  }
`

export const GradientButton = styled(ButtonBase)`
  background-image: var(--linearGradient);
  color: white;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`