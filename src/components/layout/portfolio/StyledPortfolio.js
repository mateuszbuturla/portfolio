import styled from 'styled-components';

const StyledPorfolioContainer = styled.section`
    position: relative;
`;

const StyledProjectContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.first ? '0' : '100%')};
`;

export { StyledPorfolioContainer, StyledProjectContainer };