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
  top: 200px;
  left: 160px;
  right: 20px;
  width: 100%;
  height: 100%;
`;
