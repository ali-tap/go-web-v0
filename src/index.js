import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

class Root extends React.Component {
  render(){
    return (
      <BrowserRouter>
          <div>
          <Route exact path={"/"} component={App}/>
          <Route path={"/:lang"} component={App}/>
          </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
