import styled from "styled-components";
import * as palette from '../Variables';



export const TickIcon = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: contain;
  position: absolute;
  left: 0rem;
  top: 0.625rem;
  transform: scale(3.239);
  `;

export const WrapperCircle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperTick = styled.div`
  position: absolute;
  top: 1.688rem;
  left: 1.431rem;
  width: 2.2rem;
  height: 1.675rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TickIcon1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
`;

export const Confirmation = styled.div`
  width: 5.063rem;
  height: 5.063rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

export const EmailSent= styled.div`
  margin-top: -0.062rem;
  margin-bottom: -0.062rem;
  width: 24.438rem;
  position: relative;
  font-size: ${palette.fontSizeBase};
  line-height: 1.5rem;
  display: inline-block;
  mix-blend-mode: normal;
  text-align: center;

`;

export const CircleIcon = styled.img`
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0rem;
  top: 0.625rem;
  transform: scale(1.741);
`;