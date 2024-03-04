import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;

/* font sizes */
--font-size-xs: 0.75rem;
--font-size-base: 1rem;
--font-size-21xl: 2.5rem;
--font-size-5xl: 1.5rem;
--font-size-13xl: 2rem;
--font-size-3xs: 0.625rem;
--font-size-sm: 0.875rem;
--font-size-11xl: 1.875rem;
--font-size-lg: 1.125rem;

/* Colors */
--color-white: #fff;
--color-gray-100: rgba(255, 255, 255, 0.6);
--color-gray-200: rgba(255, 255, 255, 0.2);
--color-gray-300: rgba(0, 0, 0, 0.2);
--color-gray-400: rgba(0, 0, 0, 0.17);
--color-gray-500: rgba(0, 0, 0, 0.16);
--color-black: #000;
--color-darkslategray-100: rgba(51, 51, 51, 0.2);
--color-darkslategray-200: rgba(51, 51, 51, 0.09);

/* Gaps */
--gap-107xl: 7.875rem;
--gap-35xl: 3.375rem;
--gap-0: 0rem;
--gap-34xl: 3.313rem;
--gap-8xs: 0.313rem;
--gap-101xl: 7.5rem;
--gap-21xl: 2.5rem;
--gap-11xl: 1.875rem;
--gap-3xs: 0.625rem;

/* Paddings */
--padding-21xl: 2.5rem;
--padding-7xl: 1.625rem;
--padding-4xl: 1.438rem;
--padding-xl: 1.25rem;
--padding-mini: 0.938rem;
--padding-base: 1rem;
--padding-sm: 0.875rem;
--padding-15xl: 2.125rem;
--padding-19xl: 2.375rem;
--padding-3xs: 0.625rem;

/* Border radiuses */
--br-11xl: 30px;
--br-31xl: 50px;

}
`;
