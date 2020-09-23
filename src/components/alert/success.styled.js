import styled from "styled-components";

const StyledSuccess = styled.div(
  ({ theme }) => `
    animation: appearsFromTop .3s;
    display: inline-block;

    p {
      background: #459d6c;
      color: white;
      font-size: 1.5rem;
      padding: .5rem 1rem;
      border-radius: 1rem;
      margin: 0;
    }
`
);

export default StyledSuccess;
