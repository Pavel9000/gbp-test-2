import { loading } from "../loading"
import { error } from "../error"

export function get_services(arr) {
    return {
        type: 'GET_SERVICES',
        services: arr
    }
}

export function get_services_server() {
    return async (dispatch, getState) => {
        try {
            dispatch( error(false) )
            dispatch( loading(true) )

            function pause(t) { return new Promise( resolve => setTimeout(resolve, t) ) }
            await pause(500)

            const url = 'http://localhost:7070/api/services'
            const response = await fetch(url)
            if (response.status === 200) {
                const json = await response.json()
                dispatch( loading(false) )
                return dispatch( get_services(json) )
            } else {
                return dispatch( error(true) )
            }
        } catch (e) {
            console.log(e)
        }
    }
}
