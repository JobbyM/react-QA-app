import React, { Component } from 'react';
import './QuestionItem.css'

class QuestionItem extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-chevron-up"></span>
            <span className="vote-count">{this.props.voteCount}</span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.title}</h4>
          <p>{this.props.desc}</p>
        </div>
      </div>
    )
  }
}

export default QuestionItem;
