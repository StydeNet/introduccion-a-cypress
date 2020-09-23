import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 2rem;
  margin: 0 auto;
  width: 100%;

  form {
    animation: appearsFromLeft 0.5s;
  }

  @media (min-width: ${({ theme }) => theme.size.small}) {
    width: 40rem;
  }
`;
