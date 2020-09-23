import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as Config from "config";
import * as Modules from "modules";
import GlobalStyles from "./global-styles";

const App = () => (
  <ThemeProvider theme={Config.theme}>
    <GlobalStyles />
    <Router>
      <Route path="/signup" component={Modules.SignUp} />
      <Route exact path="/" component={Modules.HelloWorld} />
    </Router>
  </ThemeProvider>
);

export default App;
