import { h, Component } from "preact";
import { Root, Box, Baseline } from "pret-a-porter";
import Router from "preact-router";
import Home from "./home";

export default class App extends Component {
  render(pros, { url }) {
    return (
      <Root>
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
