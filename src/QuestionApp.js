import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

class QuestionApp extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <h1>Question & Answer</h1>
            <ShowAddButton />
          </div>
        </div>
        <div className="container media-list">
          <QuestionForm />
          <QuestionList />
        </div>
      </div>
    )
  }
}

export default QuestionApp;
