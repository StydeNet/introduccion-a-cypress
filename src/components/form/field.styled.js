import styled from "styled-components";

const StyledField = styled.div(
  ({ theme }) => `
    margin: 2rem 0;

    label {
      cursor: pointer;
      display: block;
      font-size: 1.8rem;
      margin-bottom: .5rem;
    }

    input {
      border: 1px solid ${theme.border};
      border-radius: ${theme.radius};
      font-size: 1.6rem;
      padding: .8rem;
      outline: 0;
      width: 100%;

      &:focus {
        border-color: ${theme.highlight};
      }

      @media (min-width: ${theme.size.small}) {
        width: 200px;
      }      
    }
  `
);

export default StyledField;
