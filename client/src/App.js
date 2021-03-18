import './App.css';
import { Switch, Route } from "react-router-dom"
import { LandingPage, Dashboard, AddEventPage } from "../src/pages"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route path="/formadd">
          <AddEventPage/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
