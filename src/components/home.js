import { h, Component } from "preact";
import { Box } from "pret-a-porter";

class Home extends Component {
  render() {
    return (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        backgroundColor="black"
        color="silver"
        textAlign="center"
      >
        <Box as="header" width="100%">
          <Box>
            <Box as="h1" size={2} color="white">Prêt-à-Preact 🛍️</Box>
            <Box
              css={theme => ({
                "> a": {
                  color: theme.colors.white,
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline"
                  }
                }
              })}
            >
              <a href="https://github.com/developit/preact">Preact</a>
              {" "}&{" "}
              <a href="https://github.com/rofrischmann/fela">Fela</a>
              {" "}boilerplate powered by webpack2. (
              <a href="https://github.com/efflam/pret-a-preact">github</a>
              )
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Home;
