import styled from "styled-components";
import { DivWithShadow, SectionContainer } from "../../styles";
import coverBg from "../../assets/images/coverBg.png";


export const Cover = styled.div`
  height: 30vh;
  width: 100%;

  position: relative;
  z-index: 1;

  background-size: cover; 
  background-position: center; 
  background-image: url(${coverBg});
`;

export const UserSectionContainer = styled(SectionContainer)`
  position: relative;
  z-index: 2; 
  margin-top: -7rem;
  `

export const UserInfoContainer = styled(DivWithShadow)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0;

  @media (max-width: 768px) { 
    grid-template-columns: 1fr;
  }
`




// export const Container = styled.main`
//   display: grid;
//   grid-template-rows: 1fr 4fr;
//   height: 100%;
// `;




// export const TopDiv = styled.div`
//   position: absolute;
//   top: 200px;
//   left: 160px;
//   right: 20px;
//   width: 100%;
//   height: 100%;
// `;
