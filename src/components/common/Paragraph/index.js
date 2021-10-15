import styled from 'styled-components';

export const Paragraph = styled.p`
    color: ${props => props.theme.colors[props.color]};
    font-size: 4vh;
    margin: 3vh 0px;
    width: 40vw;

    @media (orientation: portrait) {
        font-size: 4vw;
        width: 80vw;
    }
`;