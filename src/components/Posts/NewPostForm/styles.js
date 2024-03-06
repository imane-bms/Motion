import styled from 'styled-components';
import { DivWithShadow } from '../../../styles';


export const NewPostFormPreviw = styled(DivWithShadow)`
display:flex;
justify-content:space-between;
align-items: center;
width: 100%;
max-height: min-content;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 99;
`;

export const Popup = styled.div`
  min-width: 50%;
  max-width: 90%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  z-index: 999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  border: none;
  color: white;
  background-color: transparent;
  border-radius: 50%;

  cursor: pointer;
`;

export const PostInputArea = styled.textarea`
width: 100%;
min-height: 18rem;
padding: 1rem;
border: 1 solid gray;

font-size: 1.5rem;
`