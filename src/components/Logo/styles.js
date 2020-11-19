import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;

    & > * {
        max-width: 80vw;
    }
    
`;
