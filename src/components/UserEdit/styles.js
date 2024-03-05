import styled from "styled-components";
import { DivWithShadow } from "../../styles";

export const Image = styled.img`
  width: 40%;
`;

export const SmallDivWithShadow = styled(DivWithShadow)`
  height: 700px;
  width: 80%;
  display: flex;
`;

export const LeftFlexColDiv = styled.div`
  display: flex;
  gap: 10%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  height: 100%;
  border-right: 1px rgb(222, 222, 222) solid;
`;

export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const RightDivContainer = styled.div`
  width: 70%;
  height: 100%;
`;
export const FormGrid = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const StyledGridItem = styled.div`
  grid-column: span 1; /* takes one col */
  border-bottom: 1px rgb(222, 222, 222) solid;
  padding: 20px;
`;
export const TallerGridItem = styled.div`
  grid-row: span 3;
  border-bottom: 1px rgb(222, 222, 222) solid;
  padding: 20px;
`;
export const HobbiesContainer = styled.div`
  grid-column: span 2; /*takes two cols */
  background-color: lightyellow;
  border: red 1px dotted;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
`;
