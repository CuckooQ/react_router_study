import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Links from "./components/Links";

export default function App() {
  const state = {
    isLogin: false,
    getLogined: () => {
      state.isLogin = true;
    },
  };

  return (
    <Router>
      <Links />
      <Switch>
        <Route path="/dashboard/:id" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route
          path="/login"
          //component={Login}
          render={() => <Login getLogined={state.getLogined} />}
        />
        <Route
          path="/"
          // component={Home}
          exact
          render={() => {
            return state.isLogin ? <Home /> : <Redirect to="/login" />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
