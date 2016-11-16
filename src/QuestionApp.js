import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

class QuestionApp extends Component {

  constructor(props){
    super(props)
    this.state = {
      onToggleForm: false
    }
  }

  onToggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <h1>Question & Answer</h1>
            <ShowAddButton onToggleForm={()=>this.onToggleForm()}/>
          </div>
        </div>
        <div className="container media-list">
          <QuestionForm
            formDisplay={this.state.formDisplay}
            onToggleForm={()=>this.onToggleForm()}/>
          <QuestionList />
        </div>
      </div>
    )
  }
}

export default QuestionApp;
