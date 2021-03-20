import React from "react";
import Login from "../pages/login/Login";
import App from "../layouts/app/App";
import loadable from "react-loadable";
import { Spin } from "antd";
const LoadingComponent = () => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <Spin />
  </div>
);

const CanvaserList = loadable({
  loader: () => import("../pages/canvaser/List"),
  loading: LoadingComponent,
});
const CanvaserForm = loadable({
  loader: () => import("../pages/canvaser/Form"),
  loading: LoadingComponent,
});

const ResellerList = loadable({
  loader: () => import("../pages/reseller/List"),
  loading: LoadingComponent,
});

const routes = [
  { path: "/login", component: Login },
  {
    path: "/",
    name: "home",
    component: App,
    routes: [
      // member
      {
        path: "/member",
        name: "member",
        breadcrumb: "Member",
        routes: [{ path: "/member", redirect: "/member/canvaser" }],
      },
      // canvaser
      {
        path: "/member/canvaser",
        name: "canvaser",
        routes: [
          { path: "/member/canvaser", redirect: "/member/canvaser/list" },
          {
            path: "/member/canvaser/list",
            name: "canvaser-list",
            component: (props) => <CanvaserList {...props} />,
          },
          {
            path: "/member/canvaser/add",
            name: "canvaser-add",
            component: (props) => <CanvaserForm add {...props} />,
          },
          {
            path: "/member/canvaser/:id/view",
            name: "canvaser-view",
            component: (props) => <CanvaserForm view {...props} />,
          },
          {
            path: "/member/canvaser/:id",
            name: "canvaser-view",
            component: (props) => <CanvaserForm edit {...props} />,
          },
        ],
      },
      // reseller
      {
        path: "/member/reseller",
        name: "reseller",
        routes: [
          { path: "/member/reseller", redirect: "/member/reseller/list" },
          {
            path: "/member/reseller/list",
            name: "reseller-list",
            component: (props) => <ResellerList {...props} />,
          },
        ],
      },
    ],
  },
];

export default routes;
