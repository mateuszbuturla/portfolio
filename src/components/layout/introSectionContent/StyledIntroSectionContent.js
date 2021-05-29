import styled from 'styled-components';

const StyledIntroSectionContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 20vh 10vw 0px 10vw;
    width: 100vw;
    height: 100vh;
`;

const StyledName = styled.h1`
    color: ${props => props.theme.colors.fontFirst};
    font-size: 3vw;
`;

const StyledSurname = styled.span`
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.theme.colors.fontFirst};
`;

const StyledProfession = styled.h2`
    color: ${props => props.theme.colors.fontSecond};
    font-size: 1.7vw;
`;

const StyledParagraph = styled.p`
    color: ${props => props.theme.colors.fontSecond};
    font-size: 1vw;
    margin: 5vh 0px 0px 0px;
    max-width: 20vw;
`;

const StyledGetInTouch = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.colors.fontFirst};
    cursor: pointer;
    position: absolute;
    bottom: 20vh;
    font-size: 1vw;
`;

export { StyledIntroSectionContent, StyledName, StyledSurname, StyledProfession, StyledParagraph, StyledGetInTouch };