import { Switch, Route } from "react-router-dom";
import { Header } from "..";
import { EmployeesList } from "../../pages";

function Main(): JSX.Element {
    return (
        <div>
            <Header></Header>
            <Switch>
                <Route path="/">
                    <EmployeesList />
                </Route>
            </Switch>
        </div>
    );
}

export default Main;
