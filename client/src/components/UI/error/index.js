import React, {Component} from 'react'
import classes from './index.module.css'
import {connect} from 'react-redux'

import {get_services_server} from '../../../store/actions/services'

class Error extends Component {

    state = {}

    render() {
        return (
            <div className={classes.error}>
                <div className={classes.error_message}>Произошла ошибка!</div>
                <button onClick={() => {this.props.get_services_server()}}>Повторить запрос</button>
            </div>
        )
    }
}



 function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_services_server: () => dispatch(get_services_server())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)