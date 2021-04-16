const initState = {
    listingError: null,
}

const listingReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_ERROR':
            return {
                ...state,
                listingError: action.error.message
            } 

        case 'CREATE_SUCCESS':
            return {
                ...state,
                listingError: null
            } 

        case 'DELETE_ERROR':
            return {
                ...state,
                listingError: action.error.message
            }

        case 'DELETE_SUCCESS': 
            return {
                ...state,
                listingError: null
            } 

        case 'ADDFAVOURITE_ERROR':
            return {
                ...state,
                listingError: action.error.message
            }

        case 'ADDFAVOURITE_SUCCESS':
            return {
                ...state,
                listingError: null
            } 

        case 'REMOVEFAVOURITE_ERROR':
            return {
                ...state,
                listingError: action.error.message
            }

        case 'REMOVEFAVOURITE_SUCCESS':
            return {
                ...state,
                listingError: null
            } 

        case 'SENDMESSAGE_ERROR':
            return {
                ...state,
                listingError: action.error.message
            }

        case 'SENDMESSAGE_SUCCESS':
            return {
                ...state,
                listingError: null
            }

        case 'NEWMESSAGE_ERROR':
            return {
                ...state,
                listingError: action.error.message
            }

        case 'NEWMESSAGE_SUCCESS':
            return {
                ...state,
                listingError: null
            }

        default:
            return state; 
    }
}

export default listingReducer; 

