export const AUTH_SUCCESS = "AUTH_SUCCESS" as const;
export const AUTH_LOGOUT = "AUTH_LOGOUT" as const;
export const AUTH_REFRESH_TOKEN = "AUTH_REFRESH_TOKEN" as const;

export const authSucces = (id: string) => {
  return {
    type: AUTH_SUCCESS,
    payload: id,
  };
};

export type authActionsTypes = ReturnType<typeof authSucces>;
