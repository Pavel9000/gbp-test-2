import React, {Component} from 'react'
import classes from './index.module.css'
import Layout from '../../layouts/Layout'
import Loading from '../../components/UI/loading'

class Details extends Component {

    state = {
        error: false,
        loading: false,
        details: {
            name: '',
            price: 0,
            content: ''
        }
    }

    componentDidMount() {
        this.get_details()
    }

    async get_details() {
        try {
            this.setState({
                loading: true,
                error: false
            })

            function pause(t) { return new Promise( resolve => setTimeout(resolve, t) ) }
            await pause(500)

            const url = `http://localhost:7070/api/services/${this.props.state.match.params.id}`
            const response = await fetch(url)

            if (response.status === 200) {
                const json = await response.json()
                this.setState({
                    details: json,
                    loading: false
                })
            } else {
                this.setState({error: true})
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
            return (
                <Layout>
                    <div className={classes.wrap} >
                        <div 
                            className={classes.btnGoBack}
                            onClick={() => this.props.state.history.goBack()}
                        >
                            <svg viewBox="0 0 60 32" width="1em" height="1em"><path fill="#fff" d="M53 17.5H13.7l8.4 8.4L20 28 8 16 20 4l2.1 2.1-8.4 8.4H53z"></path></svg>
                        </div>
                        {
                            this.state.error 
                            || this.state.details.name === undefined 
                            || !this.state.details.price === undefined 
                            || !this.state.details.content === undefined 
                                ? <div className={classes.error}>
                                    <div className={classes.error_message}>Произошла ошибка!</div>
                                    <button onClick={() => {this.get_details()}}>Повторить запрос</button>
                                </div>
                                : <div className={classes.wrap__window} >
                                    <h1>Детали</h1>
                                    {
                                        this.state.loading
                                            ? <Loading />
                                            : <div className={classes.wrap__window__links} >
                                                <div className={classes.wrap__window__links__block} >
                                                    <div className={classes.wrap__window__links__block__elem} >
                                                        { `Название услуги: ${this.state.details.name}` }
                                                    </div>
                                                    <div className={classes.wrap__window__links__block__elem} >
                                                        { `Цена: ${this.state.details.price} руб.` }
                                                    </div>
                                                    <div className={classes.wrap__window__links__block__elem} >
                                                        { `Описание: ${this.state.details.content}` }
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                </div>
                        }
                    </div>
                </Layout>
            )
        
    }
}

export default Details