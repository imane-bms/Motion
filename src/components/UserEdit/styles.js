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

  height: 100%;
`;

export const StyledGridItem = styled.div`
  grid-column: span 1; /* takes one col */
  border-bottom: 1px rgb(222, 222, 222) solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const TallerGridItem = styled.div`
  grid-row: span 3;
  border-bottom: 1px rgb(222, 222, 222) solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const HobbiesContainer = styled.div`
  grid-column: span 2; /*takes two cols */
  grid-row: span 8;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
`;

export const HobbiesInput = styled(Input)`
  width: 80%;
  border-bottom: 1px rgb(222, 222, 222) solid;
  margin-right: 40px;
`;

// to hide the default spinner/ arrows for number input
export const NumberInput = styled(Input).attrs({ type: "number" })`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const HobbyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  background-color: lightgray;
  width: fit-content;
  padding: 6px 20px;
  border-radius: 20px;
`;
export const HobbyText = styled.span`
  margin-right: 7px;
`;
export const RemoveBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;
export const SmallFlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const CustomSelect = styled.select`
  /* Resetting default styles */
  padding: 0.5rem;
  border: none;
  background-color: #fff;
  font-size: 16px;
`;
