import { Switch, Route } from "react-router-dom";
import { Header } from "..";
import { Employees } from "../../pages";

function Main(): JSX.Element {
    return (
        <div>
            <Header></Header>
            <Switch>
                <Route path="/">
                    <Employees />
                </Route>
            </Switch>
        </div>
    );
}

export default Main;
