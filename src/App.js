import React from 'react';
import Wrapper from './Wrapper/Wrapper.js'
import './assets/global.css'
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import SingleProduct from './SingleProduct/SingleProduct.js';
 

export default  class App extends React.Component {
  render(){
    return(
      <Router>
      <Switch>
        <Route exact path = '/' component = {Wrapper} />
        <Route path ='/product/:id' component={SingleProduct}/>
      </Switch>
    </Router>
    
    )
  }
}

