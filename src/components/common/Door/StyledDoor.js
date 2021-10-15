import styled from 'styled-components';

const StyledDoor = styled.img`
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  height: 80vh;
  left: ${(props) => (props.direction === 'left' ? props.from : 'auto')};
  right: ${(props) => (props.direction === 'right' ? props.from : 'auto')};

  @media (orientation: portrait) {
    height: auto;
    width: 30vw;
  }
}
`;

export { StyledDoor };