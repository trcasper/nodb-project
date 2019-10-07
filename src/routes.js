import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Splash from './Components/Splash'
import Vid from './Components/Vid'
import Comments from './Components/Comments'

export default (
    <Switch>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/vid/:id" component={Vid}/>
    </Switch>
)