import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home";
import Login from "./components/login/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
