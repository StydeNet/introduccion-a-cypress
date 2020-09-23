import styled from "styled-components";

const StyledErrorMsg = styled.p(
  ({ theme }) => `
    animation: appearsFromTop .3s;
    color: ${theme.alert};
    font-size: 1.4rem;
    margin: .5rem 0 0 .5rem;
`
);

export default StyledErrorMsg;
