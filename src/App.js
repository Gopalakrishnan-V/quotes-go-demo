import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import { AuthorScreen } from "./screens/AuthorScreen";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/authors/:id" render={(props) => {
          return <AuthorScreen {...props} key={`AuthorScreen_${props.match.params.id}`}/>
        }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
