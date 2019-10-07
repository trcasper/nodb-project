import React from 'react';
import {Link} from 'react-router-dom'

import './Splash.css';

class Splash extends React.Component {
  constructor() {
    super()

  }






  render() {
  return (
    
    <div className="App">
      <header className="splash-header">
        <button id="pr-logo">Punk Reviews</button>>

      </header>

      <body>
        <div className="image">

          <div className="list-box">
            <div className="list-title">Band List</div>

            <div className="link-box">
              <div className="mini-logo">
              <div className="sincerely-logo"></div>
              </div>
              <div className="band-link">
              <div><Link to="/vid/0"><button className="link-button">Sincerely, Me</button></Link></div>
              </div>
            </div>
            <div className="link-box">
              <div className="mini-logo">
                <div className="loop-logo"></div>
              </div>
              <div className="band-link">
              <div><Link to="/vid/1"><button className="link-button">Alpine Loop</button></Link></div>
              </div>
            </div>
            <div className="link-box">
              <div className="mini-logo">
                <div className="atf-logo"></div>
              </div>
              <div className="band-link">
              <div><Link to="/vid/2"><button className="link-button">All That Falls</button></Link></div>
              </div>
            </div>
            <div className="link-box">
              <div className="mini-logo">
                <div className="ue-logo"></div>
              </div>
              <div className="band-link">
              <div><Link to="/vid/3"><button className="link-button">Untamed Engine</button></Link></div>
              </div>
            </div>

          </div>
            

        </div>
 
      </body>
    </div>
  );
  }
  
}


export default Splash;
