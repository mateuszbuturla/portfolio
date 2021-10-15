import styled from 'styled-components';

const StyledAvatar = styled.img`
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    height: 70vh;

    @media (orientation: portrait) {
        height: auto;
        width: 30vw;
    }
`;

export { StyledAvatar };
