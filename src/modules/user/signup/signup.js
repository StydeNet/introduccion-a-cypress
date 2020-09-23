import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

import * as Steps from "./steps";
import { StyledContainer } from "components";

createStore({
  data: {},
});

export const SignUp = () => {
  return (
    <StateMachineProvider>
      <StyledContainer>
        <Router basename="signup">
          <Route exact path="/" component={Steps.PersonalInfo} />
          <Route path="/security-info" component={Steps.SecurityInfo} />
          <Route path="/address-info" component={Steps.AddressInfo} />
        </Router>
      </StyledContainer>
    </StateMachineProvider>
  );
};
