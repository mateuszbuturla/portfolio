import styled from 'styled-components';

export const StyledIntroBGContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const StyledIntroBGPortait = styled.img`
    width: 100vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (orientation: landscape) {
        display: none;    
    }
`;
export const StyledIntroBGLandscape = styled.img`
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (orientation: portrait) {
        display: none;    
    }
`;