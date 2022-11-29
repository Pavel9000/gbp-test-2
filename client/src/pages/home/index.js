import React, {Component} from 'react'
import classes from './index.module.css'
import Layout from '../../layouts/Layout'
import {connect} from 'react-redux'
import {get_services_server} from '../../store/actions/services'
import Loading from '../../components/UI/loading'
import Error from '../../components/UI/error'

class Home extends Component {

    state = {
        num_page: 0,
        count_on_page: 5
    }

    async componentDidMount() {
        if (this.props.services.length === 0) {
            this.props.get_services_server()
        }
    }

    to_page(num_page_new) {
        this.setState({num_page: num_page_new})
    }
    
    render() {
            return (
                <Layout>
                    <div className={classes.wrap} >
                        {
                            this.props.error
                                ? <Error />
                                : <div className={classes.wrap__window} >
                                    <h1>Список услуг</h1>
                                    {
                                        this.props.loading
                                            ? <Loading />
                                            : <div className={classes.wrap__window__links} >
                                                {
                                                    this.props.services.map((obj, i) => {
                                                        if ( i >= this.state.num_page*this.state.count_on_page 
                                                            && i < (this.state.num_page+1)*this.state.count_on_page 
                                                        ) {
                                                            return (
                                                                <div className={classes.wrap__window__links__block} 
                                                                    key={i} 
                                                                    onClick={() => this.props.state.history.push( `/${obj.id}/details` )}
                                                                >
                                                                    <div className={classes.wrap__window__links__block__name} >
                                                                        { obj.name }
                                                                    </div>
                                                                    <div className={classes.wrap__window__links__block__price} >
                                                                        { `${obj.price} руб.` }
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        
                                                    })
                                                }
                                            </div>
                                    }
                                    {
                                        
                                        this.props.services.length > this.state.count_on_page
                                            ? <div className={classes.wrap__window__pagination} >
                                                
                                                {
                                                    this.props.services.map((obj, i) => {
                                                        if ( 
                                                            i%this.state.count_on_page === 0
                                                        ) {
                                                            let cls_pagination_button = [classes.wrap__window__pagination__button]
                                                            if ( i/this.state.count_on_page === this.state.num_page ) {
                                                                cls_pagination_button.push(classes.wrap__window__pagination__button__active)
                                                            }
                                                            return (
                                                                <div className={cls_pagination_button.join(' ')}
                                                                    key={i}
                                                                    onClick={() => this.to_page(i/this.state.count_on_page) }
                                                                >
                                                                        {i/this.state.count_on_page+1}
                                                                </div>
                                                            )
                                                        }
                                                        
                                                    })
                                                }                                   
                                                
                                            </div>
                                            : null
                                    }
                                </div>
                        }
                    </div>
                </Layout>
            )
        
    }
}

function mapStateToProps(state) {
    return {
        services: state.services.services,
        loading: state.loading.loading,
        error: state.error.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_services_server: () => dispatch(get_services_server())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)