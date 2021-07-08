import { AUTH_SUCCESS, authActionsTypes } from "./action";
import { AuthReducerInitialState } from "./interface";

const initialState: AuthReducerInitialState = {
  id: "",
  token: {
    access: localStorage.getItem("tokenAccess"),
    refresh: localStorage.getItem("tokenRefresh"),
  },
};

export const authReducer = (
  state: AuthReducerInitialState = initialState,
  action: authActionsTypes
) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
