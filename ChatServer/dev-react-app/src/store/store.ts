import { createStore, applyMiddleware } from "redux";
import createRootReducer from "./root-reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = () => {
  const store = createStore(createRootReducer(), undefined, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}