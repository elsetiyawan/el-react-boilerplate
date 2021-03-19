import { BrowserRouter, Switch } from "react-router-dom";
import routes from "./routes";
import RouteWithSubRoutes from "./routes/RouteWithSubRoutes";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
