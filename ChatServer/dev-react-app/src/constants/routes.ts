interface IRouteMap {
  [key: string]: IRoute;
}
interface IRoute {
  route: string;
  exact: boolean;
}

export const routesMap: IRouteMap = {
  Main: {
    route: '/',
    exact: true
  },
  SignIn: {
    route: '/SignIn',
    exact: true
  },
  SignUp: {
    route: '/SignUp',
    exact: true
  },
  Conversations: {
    route: '/Conversations',
    exact: true
  },
  Conversation: {
    route: '/Conversations/:id',
    exact: false
  },
  Profiles: {
    route: '/Profile',
    exact: true
  },
  Profile: {
    route: '/Profile/:id',
    exact: false
  },
  Help: {
    route: '/Help',
    exact: true
  },
};
