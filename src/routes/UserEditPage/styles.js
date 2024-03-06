import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-rows: 1fr 4fr;
  height: 100%;
`;
export const Cover = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  margin-bottom: 300px;
  position: relative;
`;
export const TopDiv = styled.div`
  position: absolute;
  top: 22%;
  left: 10%;

  width: 100%;
  height: 100%;
`;
export const SmallTopDiv = styled(TopDiv)`
  display: flex;
  align-items: center;
  top: 14%;
  left: 80%;
  width: 11%;
  height: 10%;
  color: white;
`;
export const Image = styled.img`
  width: 32px;
  height: 32px;
  padding-right: 7px;
`;
