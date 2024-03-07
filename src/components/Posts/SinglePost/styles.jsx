import styled from "styled-components";
// import { ButtonBase } from '../../../styles';

export const PostHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

export const AdditionalInfo = styled.p`
  font-size: 0.8rem;
  color: #333;
`;

export const PostPhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem;
`;

export const NumberOfPhotosNotShown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  line-height: 0;

  font-size: 3rem;

`;

export const PhotoInGroupOfPhotos = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  line-height: 0;
  margin: 0;
  display: block;
`;
export const PhotoNoGroup = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
`;

export const PostUserAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  max-width: 3rem;
  border-radius: 3rem;
`;

export const PostFooterContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const PostButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.6rem;
  gap: 0.6rem;

  &:hover {
    background-color: var(--color-gray-300);
  }
`;

export const NumberOfLikes = styled.p`
  margin-left: auto;
`;
