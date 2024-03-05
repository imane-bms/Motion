import styled from "styled-components";
import { DivWithShadow } from "../../styles";

export const Image = styled.img`
  width: 20%;
`;

export const SmallDivWithShadow = styled(DivWithShadow)`
  height: 350px;
  width: 80%;
  display: flex;
`;
export const LeftFlexColDiv = styled.div`
  display: flex;
  gap: 6%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  border-right: 1px rgb(222, 222, 222) solid;
`;

export const RightDivContainer = styled.div`
  width: 70%;
  height: 100%;
`;

export const UpperRightDiv = styled(RightDivContainer)`
  width: 100%;
  height: 60%;
  display: flex;
  gap: 60px;
`;

export const AboutDiv = styled.div`
  width: 50%;
  height: 70%;
  margin-top: 20px;
  padding: 10px;
  padding-left: 60px;
`;
export const HobbiesDiv = styled.div`
  width: 40%;
  height: 70%;
  margin-top: 20px;
  padding: 10px;
  padding-left: 50px;
`;
export const SmallFlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ContactsDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  padding-left: 10px;

  margin-bottom: 10px;
  gap: 80px;
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px rgb(222, 222, 222) solid;
  padding: 20px;
`;
