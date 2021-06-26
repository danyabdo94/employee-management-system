import { Switch, Route } from "react-router-dom";
import { Header, EmployeesList } from "../../components";

function Home(): JSX.Element {
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

export default Home;
