import styled from 'styled-components';

export const PostsContainer = styled.div`

  display: grid;
  gap: 1rem; 
  grid-auto-flow: dense; 
  grid-template-columns: repeat(1, 1fr); 

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 1.5rem;
  }

  /* @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
  } */

  @media (min-width: 1281px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;
