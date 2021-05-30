import styled from 'styled-components';

const StyledProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const StyledProjectImage = styled.img`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 80%;
`;

export { StyledProjectContainer, StyledProjectImage };