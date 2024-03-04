import styled from 'styled-components';

export const PostsContainer = styled.div`

  display: grid;
  grid-gap: 1.2rem; 
  grid-auto-flow: dense; 
  grid-template-columns: repeat(1, 1fr); 

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (min-width: 1281px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;