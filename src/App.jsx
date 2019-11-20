import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import HomePage from "./pages/Home";

import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { useSelector } from "react-redux";
import { getUiSelector } from "./selectors/ui";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.palette.background.default}
  }
`;

const setTheme = mode =>
  createMuiTheme({
    palette: {
      type: mode
    }
  });

const App = () => {
  const uiMode = useSelector(getUiSelector).mode;

  const defaultTheme = setTheme(uiMode);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router>
            <Layout>
              <Switch>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Layout>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
