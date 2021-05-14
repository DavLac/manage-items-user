import styled from 'styled-components';

export const ContainerStyled = styled.div`
    background-color: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.backgroundDarker};
`;
