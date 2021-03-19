import { Redirect, Route, Switch } from "react-router-dom";

export default function RouteWithSubRoutes(route) {
  if (route.redirect) {
    return <Redirect exact from={route.path} to={route.redirect} />;
  } else if (route.component) {
    return (
      <Route
        name={route.name}
        breadcrumbName={route.name}
        path={route.path}
        render={(props) => {
          return <route.component {...props} routes={route.routes} />;
        }}
      />
    );
  } else if (route.routes) {
    //map the children routes
    return handleSubRoute(route);
  }
}

function handleSubRoute(item) {
  return (
    <Switch key={`item-${item.path}`}>
      {item.routes.map((sub, i) => {
        if (sub.redirect) {
          return <Redirect exact from={sub.path} to={sub.redirect} />;
        } else if (sub.component) {
          return (
            <Route
              name={sub.name}
              breadcrumbName={sub.name}
              path={sub.path}
              render={(props) => {
                return <sub.component {...props} routes={sub.routes} />;
              }}
            />
          );
        } else if (sub.routes) {
          //map the children routes
          return handleSubRoute(sub);
        }
      })}
    </Switch>
  );
}
