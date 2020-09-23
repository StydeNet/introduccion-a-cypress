import styled from "styled-components";

const StyledSuccess = styled.button(
  ({ theme }) => `
    background-color: ${theme.highlight};
    border-radius: ${theme.radius};
    color: white;
    border: 0;
    font-size: 1.5rem;
    margin-right: 1rem;
    padding: .5rem 1rem;
    outline: 0;

    &:disabled {
      background-color: ${theme.border};
      cursor: not-allowed;
    }

    &:focus {
      background-color: ${theme.highlightDk};
    }
`
);

export default StyledSuccess;
