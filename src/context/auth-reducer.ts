import { Reducer } from 'react';


export interface AuthState {
  isAuthenticated: boolean;
  username?:       string;
  favouriteIcon?:  string;
}

export const authInitialState: AuthState = {
  isAuthenticated: false
};


export enum AuthActionType {
  SIGN_IN = 'sign-in',
  SIGN_OUT= 'sign-out',
  SET_FAVOURITE_ICON = 'set-favourite-icon',
  CHANGE_USERNAME = 'change-username'
}

type AuthAction =
  | { type: AuthActionType.SIGN_IN }
  | { type: AuthActionType.SET_FAVOURITE_ICON; payload: string }
  | { type: AuthActionType.SIGN_OUT }
  | { type: AuthActionType.CHANGE_USERNAME; payload: string; };


export const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {

  switch (action.type) {

    case AuthActionType.SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        username: 'test'
      };

    case AuthActionType.SIGN_OUT:
      return { ...authInitialState };

    case AuthActionType.SET_FAVOURITE_ICON:
      return {
        ...state,
        favouriteIcon: action.payload
      };

    case AuthActionType.CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload
      };

    default:
      throw new Error('AuthActionType is not valid');
  }

};
