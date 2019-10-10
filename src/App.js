import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import ScheduleKeeper from './containers/ScheduleKeeper/ScheduleKeeper'

class App extends Component {
  render () {
    return (
      <div>
       
        <Layout>
          <ScheduleKeeper />
        </Layout>
      </div>
    );
  }
}

export default App;
