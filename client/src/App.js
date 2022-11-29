import React, {Component} from 'react';

import {useRoutes} from './routes'

class App extends Component {

  render() {
    const routes = useRoutes()

    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    )

  }

}

export default App


