
const initialState = {
    services: []
}

export default function service(state = initialState, action) {
    switch (action.type) {
        case 'GET_SERVICES':
            return {
                ...state, 
                services: action.services
            }
        default:
            return state
    }
}