
const initialState = {
    error: false
}

export default function error(state = initialState, action) {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state, 
                error: action.error
            }
        default:
            return state
    }
}