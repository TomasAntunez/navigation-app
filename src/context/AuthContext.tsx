import { FC, createContext, useReducer } from "react";

import { AuthState, authReducer, AuthActionType, authInitialState } from './auth-reducer';


interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavouriteIcon: (iconName: string) => void;
  changeUsername: (username: string) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);


export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {

  const [ state, dispatch ] = useReducer( authReducer, authInitialState );

  const signIn = () => {
    dispatch({ type: AuthActionType.SIGN_IN });
  };

  const signOut = () => {
    dispatch({ type: AuthActionType.SIGN_OUT });
  };

  const changeFavouriteIcon = (iconName: string) => {
    dispatch({ type: AuthActionType.SET_FAVOURITE_ICON, payload: iconName });
  };

  const changeUsername = (username: string) => {
    dispatch({ type: AuthActionType.CHANGE_USERNAME, payload: username });
  };


  return (
    <AuthContext.Provider value={{
      authState: state,
      signIn,
      signOut,
      changeFavouriteIcon,
      changeUsername
    }}>
      { children }
    </AuthContext.Provider>
  );
};
