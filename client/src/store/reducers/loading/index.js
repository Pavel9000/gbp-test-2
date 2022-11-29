
const initialState = {
    loading: false
}

export default function loading(state = initialState, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state, 
                loading: action.loading
            }
        default:
            return state
    }
}