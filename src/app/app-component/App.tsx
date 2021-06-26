import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "../../components";

function App(): JSX.Element {
    return (
        <ChakraProvider>
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
