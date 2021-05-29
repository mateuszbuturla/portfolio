import styled from 'styled-components';

const StyledDoor = styled.img`
  position: absolute;
  top: 50vh;
  transform: translate(
    ${(props) => (props.direction === 'right' ? '50%' : '-50%')},
    -50%
  );
  height: 80vh;
  left: ${(props) => (props.startLeft ? props.startLeft : 'auto')};
  right: ${(props) => (props.startRight ? props.startRight : 'auto')};
`;

export { StyledDoor };