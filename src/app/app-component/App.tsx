import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages";

function App(): JSX.Element {
    return (
        <ChakraProvider>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>
    );
}

export default App;
