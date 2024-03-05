import styled from 'styled-components';
// import { ButtonBase } from '../../../styles';


export const PostHeaderContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  gap: 1rem;
`

export const PostFooterContainer = styled.div`
  margin-top: 1.5rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const PostButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: 3rem;
  display:flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.6rem;
  gap:0.6rem;

  &:hover {
    background-color: var(--color-gray-300);
  }
`

export const NumberOfLikes = styled.p`
  margin-left: auto;
`