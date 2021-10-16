import styled from 'styled-components';

const StyledProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: ${props => props.color};

`;

const StyledProjectImage = styled.img`
    position: relative;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 50%;

    @media (orientation: portrait) {
        height: auto;
        width: 70vw;
    }
`;

const StyledProjectName = styled.h3`
    position: absolute;
    color: ${props => props.theme.colors.fontSecond};
    bottom: 15vh;
    left: 15vw;
    font-size: 10vh;
    opacity:1;
    @media (orientation: portrait) {
        font-size: 9vw;
        bottom: 50%;
        left: 10vw;
        transform: translateY(calc(-50% + 39vw));
    }
`;

const StyledProjectCategory = styled.p`
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.theme.colors.fontFirst};
    bottom: 25vh;
    left: 15vw;
    font-size: 6vh;
    opacity:1;
    @media (orientation: portrait) {
        font-size: 7.5vw;
        bottom: 50%;
        left: 10vw;
        transform: translateY(calc(-50% + 28vw));
    }
`;

const StyledProjectNumber = styled.div`
    position: absolute;
    color: ${props => props.theme.colors.fontFirst};
    top: 40vh;
    left: 23vw;
    font-size: 7vh;
    transform: translateY(-50%);
    opacity:1;

    hr {
        transform: rotate(-15deg);
        height: 0.5vh;
        background-color: ${props => props.theme.colors.fontFirst};
    }

    @media (orientation: portrait) {
        font-size: 7.5vw;
        top: 50%;
        left: 12vw;
        transform: translateY(calc(50% - 32vw));
    }
`;

const StyledProjectTechnologies = styled.div`
    position: absolute;
    top: 27vh;
    left: 80vw;
    color: ${props => props.theme.colors.fontFirst};
    font-size: 3vh;
    opacity:1;

    @media (orientation: portrait) {
        font-size: 4vw;
        top: 50%;
        left: 82vw;
        transform: translateY(calc(50% - 35vw));
    }
`;

export { StyledProjectContainer, StyledProjectImage, StyledProjectName, StyledProjectCategory, StyledProjectNumber, StyledProjectTechnologies };