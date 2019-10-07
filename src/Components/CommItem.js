import React, { Component } from "react";
import "../Components/CommItem.css"
import axios from "axios";

class CommItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      editInput: props.element
    };
  }

  edit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });

  };
  
  save = () => {
    this.props.save(this.props.vidId, this.props.index) 
    this.setState({
      editing: false
    })
  }
  

  // handleInput = e => {
  //   this.setState({
  //     editInput: e.target.value
  //   });
  //   console.log(this.state[e.target.comments])
  // };

  //////
  // save = () => {
  //   const index = this.props.index;
  //   const newItem = this.state.editInput;

  //   console.log(index, newItem);

  //   axios
  //     .put(`/api/comms/${index}`, { index, newItem })
  //     .then(res => this.setState({comments: res.data}));

  //   // this.setState({
  //   //   editing: false
  //   // });
  // };

  ////////

  render() {
    return (
      <div>
        {this.state.editing ? (<div>
            <input onChange={this.props.handleInput}/>
            <button id={this.props.index} onClick={() => this.save()}>Save</button>
        </div>) : (
          <div>
            <section>{this.props.element}</section>
            <button className="changeButton" onClick={() => this.edit()}>Edit</button>
            <button className="changeButton" onClick={() => this.props.delete(this.props.vidId, this.props.index)}>
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default CommItem;
