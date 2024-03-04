import styled from "styled-components";
import { SectionContainer } from "../../../styles";

export const FeedMenuContainer = styled(SectionContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-300);
  padding: 0 3rem;
  cursor: pointer;

  & > form:first-child {
    margin-right: auto; 
  }
`

export const SearchForm = styled.input`
    background-color: transparent;
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border: 0;

    &:focus,
    :focus-visible {
        outline: 1px solid purple;
    }

`

export const FeedMenuLink = styled.div`

padding: 0.6rem 1.2rem;

&:hover {
    background-color: #333;
    color: white;
}
`
