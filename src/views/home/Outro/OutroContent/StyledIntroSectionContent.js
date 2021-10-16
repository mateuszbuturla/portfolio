import styled from 'styled-components';

const StyledName = styled.p`
    position: absolute;
    color: ${props => props.theme.colors.fontFirst};
    font-size: 7vh;
    bottom: 50vh;
    left:10vw;

    @media (orientation: portrait) {
        font-size: 9vw;
        left:5vw;
    }
`;

const StyledSurname = styled.span`
    color: ${props => props.theme.colors.accent};
`;

const StyledFooter = styled.p`
    color: ${props => props.theme.colors.fontFirst};
    position: absolute;
    bottom: 5vh;
    left:10vw;
    font-size: 2vh;

    @media (orientation: portrait) {
        left: 50vw;
        transform: translateX(-50%);
        text-align:center;
    }
`;

const StyledSocial = styled.div`
    position: absolute;
    bottom: 42vh;
    left:10vw;

    @media (orientation: portrait) {
        font-size: 9vw;
        left:5vw;
    }
`;

const StyledSocialIcon = styled.img`
    height: 35px;
    margin-right: 15px;
`;


export {
    StyledName,
    StyledSurname,
    StyledSocial,
    StyledFooter,
    StyledSocialIcon
};