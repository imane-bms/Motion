import UserEdit from "../../components/UserEdit";
import UserInfo from "../../components/UserInfo";
import { Route, Switch } from "react-router-dom";

const UserPage = () => {
  return (
    // Switch only renders one route
    <Switch>
      <Route path="/userInfo">
        <UserInfo />
      </Route>
      <Route path="/userEdit">
        <UserEdit />
      </Route>
    </Switch>
  );
};

export default UserPage;
