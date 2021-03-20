import React, { useEffect, useState } from "react";
import { Link, Switch } from "react-router-dom";
import "./App.css";
import menu from "./menu";
import sortRoute from "../../helper/sortRoute";
import RouteWithSubRoutes from "../../routes/RouteWithSubRoutes";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // disini buat ngecek apakah sudah login atau belum
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    isLoggedIn && (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["member"]}>
            {menu.map((item, i) => (
              <Menu.SubMenu key={i} title={item.name}>
                {item?.subMenu?.map((x, i) => (
                  <Menu.Item key={i}>
                    <Link to={x.path}>{x.name}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 20px", marginTop: 64 }}
        >
          {/* <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 20, marginTop: 20, height: "100vh" }}
          >
            <Switch>
              {sortRoute(props.routes).map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  );
};

export default App;
