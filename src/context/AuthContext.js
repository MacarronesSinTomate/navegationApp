import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

// Definir la información a guardar
const info_schema ={
    isLoggedIn : true | false,
    username : "",
    favoriteIcon : "",
}

// Estado inicial
export const authInitialState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Crear el contexto
export const AuthContext = createContext();

// Proveedor de estado
export const AuthProvider = ( { children } ) => {

    const [ authState, dispatch ] = useReducer( authReducer, authInitialState );

    const signIn = () => {
        dispatch( { type: 'signIn' } );
    }
    const logout = () => {
        dispatch( { type: 'logout' } );
    }
    const changeUsername = ( username ) => {
        dispatch( { type: 'changeUsername', payload: username } );
    }
    const changeFavoriteicon = ( iconName ) => {
        dispatch( { type: 'changeFavIcon', payload: iconName } );
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeUsername,
            changeFavoriteicon
        }}>
            { children }
        </AuthContext.Provider>
    );

}