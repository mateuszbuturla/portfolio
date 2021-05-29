import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${props => props.theme.colors[props.color]};
    font-size: 2vw;
    margin: 3vh 0px;
    width: 40vw;
`;

export default Paragraph;