
const actions = {

    signIn: 'signIn',
    logout: 'logout',
    changeFavIcon: 'changeFavIcon',
    changeUsername: 'changeUsername'    

}

export const authReducer = ( state, action ) => {

    switch ( action.type ) {

        case actions.signIn:
            return { 
                ...state,
                isLoggedIn: true,
                username: "no-username-yet"
            }
            
        case actions.logout:
            return { 
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case actions.changeUsername:
            return { 
                ...state,
                username: action.payload,
            }

        case actions.changeFavIcon:
            return {
                ...state,
                favoriteIcon: action.payload
            }
            
        default:
            return state;

    }

}