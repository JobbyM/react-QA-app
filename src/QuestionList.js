import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

class QuestionList extends Component {
  render() {
    return (
      <div id="questions">
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </div>
    )
  }
}

export default QuestionList;
