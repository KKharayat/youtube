import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import WatchScreen from "./screens/watchScreen/WatchScreen";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <div className="App">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main ">
          {children}
        </Container>
      </div>
    </div>
  );
};

const App = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!props.auth.loading && !props.auth.accessToken) {
      history.push("/auth");
    }
  }, [props.auth.accessToken, props.auth.loading, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/auth">
        <LoginScreen />
      </Route>

      <Route path="/search">
        <Layout>Search</Layout>
      </Route>

      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(App);
