import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "../components";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const theme = extendTheme({
    components: {
        Steps,
    },
});

function App(): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>
    );
}

export default App;
