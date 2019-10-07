import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import "./Vid.css";
import ReactPlayer from 'react-player'

import Comments from './Comments'

class Vid extends React.Component {
    constructor() {
      super()

      this.state = {
          video: "",


      };

    }
    componentDidMount = () => {
        axios.get(`/api/data/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                video: res.data
            })
        }
        )
    }
  

// {props.match.params.id}

    render() {
    
        console.log(this.state)
        
        return(
            <div className="App">
            <header className="splash-header">
              <button id="pr-logo">Punk Reviews</button>>
      
            </header>
      
            <body>
              <div className="image">

                  <div className='content-box'>
                    <div className="video-box">
                     <ReactPlayer url={this.state.video} controls={true} />
                    </div>
                    <div className='comment-box'>Comments:
                      <br/>
                      <Comments 
                      vidId={this.props.match.params.id}/>
                    </div>
                  </div>

                  
      
                
                  
      
              </div>
       
            </body>
          </div>
        )
    }

}

export default Vid;