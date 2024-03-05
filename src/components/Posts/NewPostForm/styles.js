import styled from 'styled-components';
import { DivWithShadow } from '../../../styles';


export const NewPostFormPreviw = styled(DivWithShadow)`
display:flex;
justify-content:space-between;
align-items: center;
width: 100%;
max-height: min-content;
`

// Стилизованный компонент для фона
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
`;

// Стилизованный компонент для попапа
export const Popup = styled.div`
  min-width: 50%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

// Стилизованный компонент для кнопки закрытия
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