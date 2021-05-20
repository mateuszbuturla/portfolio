import styled from 'styled-components'

const StyledDoor = styled.img`
    position:absolute;
    top: 50%;
    left: ${props => props.left ? props.left : 'auto'};
    right: ${props => props.right ? props.right : 'auto'};
    transform: ${props => props.left ? 'translate(-100%, -50%)' : 'translate(100%, -50%)'};
`;

export {StyledDoor}