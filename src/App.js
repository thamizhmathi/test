import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserList from "./components/UserList";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user-list" component={UserList} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </>
  );
}

export default App;
