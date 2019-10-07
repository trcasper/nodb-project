import React from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import routes from './routes';
import Splash from "./Components/Splash";



class App extends React.Component {




render() {
  return (
    <HashRouter>
    <div className="App">
      {routes}
    </div>
    </HashRouter>
  )
}
}


export default App;