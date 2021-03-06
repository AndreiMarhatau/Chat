import React from "react";
import { Switch, Route, Redirect } from "react-router";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import { routesMap } from "./constants/routes";
import { useSelector } from "react-redux";
import { isUserLoggedSelector } from "./selectors/user-logged.selector";
import AlertContainer from "./containers/AlertContainer/AlertContainer";

const AuthContainer = React.lazy(() => import("./containers/AuthContainer/AuthContainer"));
const MainContainer = React.lazy(() => import("./containers/MainContainer/MainContainer"));
const ProfileContainer = React.lazy(() => import("./containers/ProfileContainer/ProfileContainer"));


export const Routes = () => {
  const isUserLogged = useSelector(isUserLoggedSelector);

  const signIn =
    <Route
      path={routesMap.SignIn.route}
      exact={routesMap.SignIn.exact}
      render={() => <AuthContainer isSignIn={true} />} />;
  const signUp =
    <Route
      path={routesMap.SignUp.route}
      exact={routesMap.SignUp.exact}
      render={() => <AuthContainer isSignIn={false} />} />;

  const conversations =
    <Route
      path={routesMap.Conversations.route}
      exact={routesMap.Conversations.exact}
      component={MainContainer} />
  const conversation =
    <Route
      path={routesMap.Conversation.route}
      exact={routesMap.Conversation.exact}
      component={MainContainer} />
  const help =
    <Route
      path={routesMap.Help.route}
      exact={routesMap.Help.exact}
      render={() => <div>Помощь</div>} />

  const redirectToSign =
    <Redirect
      from={routesMap.Main.route}
      to={routesMap.SignIn.route} />

  const redirectToConversations =
    <Redirect
      from={routesMap.Main.route}
      to={routesMap.Conversations.route} />
  const profile =
    <Route
      path={routesMap.Profile.route}
      exact={routesMap.Profile.exact}
      component={ProfileContainer} />

  if (!isUserLogged)
    return (
      <div>
        <HeaderContainer />
        <Switch>
          {signIn}
          {signUp}
          {help}
          {redirectToSign}
        </Switch>
      </div>
    );
  else
    return (
      <div>
        <HeaderContainer />
        <Switch>
          {conversations}
          {conversation}
          {help}
          {profile}
          {redirectToConversations}
        </Switch>
      </div>
    )
}