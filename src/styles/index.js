import styled, { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {

    },
};

export const GlobalStyle = createGlobalStyle`
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
    line-height: 1.5;
  }

  #root {
    width: 100%;
    min-height: 80%;
  } 

  body {
    display: flex;
    justify-content: center;
    background-color: var(--color-gray-100);
  }
`;

export const Container = styled.div`
  max-width: 80%; 
  margin: 0 auto;
`;

export const SectionContainer = styled.section`
  max-width: 1240px; 
  margin: 0 auto;

  padding: 1rem 3rem;
`;

// Divs used in User and Feed

export const BaseDiv = styled.div`
  background-color: #fff;
  border-radius: 6px;
  border: 0;
  padding: 1rem;
  /* font-family: "Roboto", 'Open Sans', sans-serif; */
`;

export const DivWithShadow = styled(BaseDiv)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;


// Buttons — better styling is needed :)

export const ButtonBase = styled.button`
  padding: 1rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  text-transform: uppercase;

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
  border: 0;

  &:hover {
    opacity: 0.9;
  }
`