import React, { Component } from 'react';
import './QuestionItem.css'

class QuestionItem extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-chevron-up"></span>
            <span className="vote-count">10</span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">媒体标头</h4>
          <p>只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。只是一些文本。这是一些示例文本。</p>
        </div>
      </div>
    )
  }
}

export default QuestionItem;
