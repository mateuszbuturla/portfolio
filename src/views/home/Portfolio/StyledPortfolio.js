import styled from 'styled-components';

const StyledPinContainer = styled.div`
    margin-top: 200px;
`;

const StyledSlideContainer = styled.div`
    height:100vh;
    width: 400vw;
    display: flex;
    flex-flow: row nowrap;
`;

const StyledSlide = styled.div`
    width: 25%; 
    height: 100%;
`;

export { StyledPinContainer,
  StyledSlideContainer,
  StyledSlide, };