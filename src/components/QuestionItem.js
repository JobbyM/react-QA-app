import React, { Component } from 'react';
import '../styles/QuestionItem.css'

class QuestionItem extends Component {
  voteUp(){
    let newCount = parseInt(this.props.voteCount + 1,10)
    this.props.onVote(this.props.questionKey, newCount)
  }

  voteDown(){
    let newCount = parseInt(this.props.voteCount - 1,10)
    this.props.onVote(this.props.questionKey, newCount)
  }

  render() {
    return (
      <div className="media">
        <div className="media-left">
          <button className="btn btn-default" onClick={()=>this.voteUp()}>
            <span className="glyphicon glyphicon-chevron-up"></span>
            <span className="vote-count">{this.props.voteCount}</span>
          </button>
          <button className="btn btn-default" onClick={()=>this.voteDown()}>
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
