import React from "react";
import styles from "./App.module.css";
import Register from "../Register";
import Login from "../Login";
import { Link, Switch } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import PublicRoute from "../../components/PublicRoute";
import Home from "../Home";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarElement from "../../components/Sidebar/components/SidebarElement";
import Categories from "../Categories";
import Dashboard from "../Dashboard";
import WorkSpace from "../WorkSpace";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header left={null} right={null} />
      <Sidebar>
        <SidebarElement to="/" icon={<HomeIcon />}>
          Home
        </SidebarElement>
        <SidebarElement to="/dashboard" icon={<DashboardIcon />}>
          Dashboard
        </SidebarElement>
      </Sidebar>
      <div className={styles.workSpace}>
        <Switch>
          <PublicRoute
            restricted={true}
            path="/register"
            component={Register}
          />
          <PublicRoute restricted={true} path="/login" component={Login} />
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PrivateRoute path="/auth" component={Home} />
          <PrivateRoute path="/categories" component={Categories} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/work-space/:id" component={WorkSpace} />
        </Switch>
      </div>
    </div>
  );
};
