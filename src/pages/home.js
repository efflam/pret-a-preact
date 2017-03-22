import { h, Component } from "preact";
import { Box } from "pret-a-porter";

class Home extends Component {
  render() {
    return (
      <Box
        height="100vh"
        backgroundColor="black"
        color="silver"
        padding={[1, 3, 4]}
      >
        <Box as="h1" size={[2, 3, 4]} marginBottom={1} color="white">
          Prêt-à-Preact 🛍️
        </Box>
        <Box
          as="p"
          margin={0}
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
    );
  }
}

export default Home;
