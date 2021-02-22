import React from 'react';
import Header from './components/header';
import { renderRoutes } from 'react-router-config';
import { actions } from './components/header/store';

const App = props => {
  return (
    <div>
      <Header staticContext={props.staticContext} />
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = store => store.dispatch(actions.getHeaderInfo);

export default App;