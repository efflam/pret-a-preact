import { h, Component } from "preact";
import { Root, Box, Baseline } from "pret-a-porter";
import Router from "preact-router";
import Home from "./home";
import theme from "../lib/theme";
export default class App extends Component {
  render(pros, { url }) {
    return (
      <Root theme={theme}>
        <Box position="relative">
          <Router>
            <Home path="/" />
          </Router>
          <Baseline color={"white"} opacity={1} />
        </Box>
      </Root>
    );
  }
}
