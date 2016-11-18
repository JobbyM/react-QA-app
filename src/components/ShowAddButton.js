import React, { Component } from 'react';
import '../styles/ShowAddButton.css';

class ShowAddButton extends Component {
  render() {
    return (
      <button id="add-question-btn" className="btn btn-success" onClick={()=>this.props.onToggleForm()}>添加问题</button>
    )
  }
}

export default ShowAddButton;
