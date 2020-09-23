import React from "react";
import { useLocation } from "react-router-dom";

import { StyledContainer } from "components";

const useQuery = () => new URLSearchParams(useLocation().search);

export const HelloWorld = () => {
  const query = useQuery();
  const name = query.get("name") || "world";
  return (
    <StyledContainer>
      <div className="hello-world">Holaaa {name}!</div>
    </StyledContainer>
  );
};
