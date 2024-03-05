import styled from 'styled-components';
import { InputGroup } from "./stylesRight";
import { Input } from "./stylesRight";



export const StyledForm = styled.form`
    width: 70%; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem; 
`;

export const InputGroupForVerification = styled(InputGroup)`
    display: flex;
    justify-content: space-between;
`;
export const BetterInput = styled(Input)`
    padding: 0.5rem;
    border-radius: 4px; 
    margin: 0.5rem 0; 
    flex: 1; 
    &:not(:last-child) {
    margin-right: 1rem; 
    }
`;

