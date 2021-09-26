import { Route, Switch, useRouteMatch } from "react-router-dom";
import { NoSelection } from "./NoSelection/NoSelection";
import { ProcessDetails } from "./ProcessDetails/ProcessDetails";
import { Sidebar } from "./Sidebar/Sidebar";
import { Container } from "./styles";

export const Processes = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Sidebar />
      <Switch>
        <Route exact path={path}>
          <NoSelection />
        </Route>
        <Route path={`${path}/:processId`}>
          <ProcessDetails />
        </Route>
      </Switch>
    </Container>
  );
};
