const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR': 
            return {
                ...state,
                authError: action.error.message
            }
        
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }

        case 'LOGOUT_SUCCESS': 
            return state;
        
        case 'REGISTER_ERROR': 
            return {
                ...state,
                authError: action.error.message
            }

        case 'REGISTER_SUCCESS': 
            return {
                ...state,
                authError: null
            }

        case 'UPDATEPASSWORD_SUCCESS':
            return {
                ...state,
                authError: 'Password is updated successfully'
            }

        case 'UPDATEPASSWORD_ERROR':
            return {
                ...state,
                authError: action.error.message
            }

        default: 
            return state;
    }
}

export default authReducer;

