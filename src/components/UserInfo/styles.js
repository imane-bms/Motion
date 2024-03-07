import styled from "styled-components";

export const Image = styled.img`
  width: 4rem;
`;

// export const SmallDivWithShadow = styled(DivWithShadow)`
//   height: 350px;
//   width: 80%;
//   display: flex;
// `;

export const UserInfoFaceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-right: 1px rgb(222, 222, 222) solid;
  gap: 1rem;

  padding: 3rem;
`;

export const UserInfoDetailsBlock = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const UpperRightDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  padding: 2rem 3rem 1rem 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  padding: 2rem 0 0 0;
`;

export const HobbiesDiv = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.4rem;
`;

export const Hobbie = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 3rem;
  background-color: var(--color-gray-300);
  font-size: 0.8rem;
  color: black;
  max-width: min-content;
`;

export const SmallFlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;

  border-top: 1px rgb(222, 222, 222) solid;
`;

// export const LeftFlexColDiv = styled.div`
//   display: flex;
//   gap: 1rem;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 25%;
//   height: 100%;
//   border-right: 1px rgb(222, 222, 222) solid;
// `;

// export const RightDivContainer = styled.div`
//   width: 70%;
//   height: 100%;
// `;
