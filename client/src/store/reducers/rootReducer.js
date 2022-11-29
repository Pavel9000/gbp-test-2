import {combineReducers} from 'redux'

import services from './services'
import loading from './loading'
import error from './error'

export default combineReducers({
    services,
    loading,
    error
})
