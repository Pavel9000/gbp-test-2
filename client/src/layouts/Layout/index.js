import React, {Component} from 'react'
import classes from './index.module.css'

class Layout extends Component {

    state = {
        
    }

    render() {
        
        return (
            <div className={classes.Layout}>
                   
                <main>
                    { this.props.children }
                </main>
                
            </div>
        )
    }
}
  
export default Layout