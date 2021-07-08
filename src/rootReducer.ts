import { combineReducers } from "redux";
import { registerReducer } from "./containers/Register/reducer";
import { loginReducer } from "./containers/Login/reducer";
import { authReducer } from "./utils/Auth/reducer";

export const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
  authReducer,
});

type rootReducerType = ReturnType<typeof rootReducers>;

export type RootReducerState = rootReducerType;
