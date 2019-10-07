import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CommItem from './CommItem';
import './Comments.css'


// import "./Comments.css";

class Comments extends React.Component {
    constructor () {
        super()

        this.state = {
            comments: [],
            input: ""

        };
    };


//      handleInput = e => {
//         this.setState({
//       editInput: e.target.value
//     });
//     console.log(this.state[e.target.comments])
//   };


    componentDidMount = () =>{
        axios.get(`/api/comms/${this.props.vidId}`)
        .then(res => {
        this.setState({
            comments: res.data
            })
        })
    }


    handleInput = e => {
        const { name, value } = e.target;
        if(name === 'input'){
            this.setState({ [name]: value });
            console.log(this.state.input)
        } else {
            this.setState({editInput: e.target.value})
            console.log(this.state.editInput)
        }
    };

    addToList = () => {
        const addOn = this.state.input;
        const id = this.props.vidId
        console.log(addOn)
        axios.post("/api/comms", {addOn, id }).then(res =>
            this.setState({
                comments: res.data,
                input: ""
            }))
    };

    delete = (id, index) => {
        console.log(id, index)
        axios.delete(`/api/comms/${id}?index=${index}`).then(res =>
            this.setState({
                comments: res.data
            }))
    }

    save = (id, index) => {
        // console.log(this.state.editInput)
        const newItem = this.state.editInput;
    
        console.log(id, index, newItem);
    
        axios
          .put('/api/comms', { id, index, newItem })
          .then(res => this.setState({comments: res.data}));
    
        // this.setState({
        //   editing: false
        // });
      };


    updateState = updatedComm => {
        this.setState({
            comm: updatedComm
        });
    }

        
    render() {
        console.log(this.state)
        return(
            <section>
                    <input id="input-text"
                    placeholder="type here"
                    name="input"
                    value={this.state.input}
                    onChange={e => this.handleInput(e)}
                    onKeyDown={e => {
                    if (e.key === "Enter") {
                    this.addToList();
                    }
                    }}
                />
                <div className="comment-box">
                    {this.state.comments.map((element, index) => {
                    return (
                    <CommItem
                    element={element}
                    index={index}
                    key={`Comment item ${index}`}
                    handleInput={this.handleInput}
                    delete={this.delete}
                    save={this.save}
                    updateState={this.updateState}
                    vidId = {this.props.vidId}
                    />
                     )
                     })}
            
                </div>

            </section>
        )
    }

}

export default Comments;