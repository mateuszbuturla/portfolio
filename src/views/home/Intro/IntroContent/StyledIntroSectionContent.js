import styled from 'styled-components';

const StyledIntroSectionContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 20vh 10vw 0px 5vw;
    width: 100vw;
    height: 100vh;
`;

const StyledName = styled.h1`
    color: ${props => props.theme.colors.fontFirst};
    font-size: 7vh;

    @media (orientation: portrait) {
        font-size: 9vw;
    }
`;

const StyledSurname = styled.span`
    color: ${props => props.theme.colors.accent};
`;

const StyledProfession = styled.h2`
    color: ${props => props.theme.colors.fontSecond};
    font-size: 4vh;

    @media (orientation: portrait) {
        font-size: 5.5vw;
    }
`;

const StyledParagraph = styled.p`
    color: ${props => props.theme.colors.fontSecond};
    font-size: 2.4vh;
    margin: 5vh 0px 0px 0px;
    max-width: 20vw;

    @media (orientation: portrait) {
        font-size: 4vw;
        max-width: 50vw;
    }
`;

const StyledGetInTouch = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.colors.fontFirst};
    cursor: pointer;
    position: absolute;
    bottom: 20vh;
    font-size: 2.4vh;

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.fontFirst};
    }

    @media (orientation: portrait) {
        font-size: 4vw;
        max-width: 80vw;
    }
`;

const StyledIcon = styled.img`
    height: 35px;
    margin-right: 20px;
    transform: translateY(25%);
`;

export { StyledIntroSectionContent, StyledName, StyledSurname, StyledProfession, StyledParagraph, StyledGetInTouch, StyledIcon };