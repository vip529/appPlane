import React, { Fragment } from 'react';
import './App.css';
import HeaderComp from './component/HeaderComp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Homepage from './screens/Homepage';
import GitScout from './screens/GitScout';
import ImageEffects from './screens/ImageEffects';
import GetCard from './screens/GetCard';


const App = () => {

  return (
    <Fragment >
      <Router>
        <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/gitscout" component={GitScout}/>
                <Route path="/gitscout" component={GitScout}/>
                <Route path="/image" component={ImageEffects}/>
                <Route path="/card" component={GetCard}/>
                <Route component={NotFound}/>

        </Switch>
        
      </Router>
    </Fragment>
  );
}

export const NotFound = () => {
  return(
    <>
    <HeaderComp/>
    <p style={{textAlign:"center",padding:"30px",fontSize:20,fontWeight:"bold"}}>Page not found</p>
    </>
  )
}

export default App;
