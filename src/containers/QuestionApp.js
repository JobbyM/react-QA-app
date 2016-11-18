import React, { Component } from 'react';
import ShowAddButton from '../components/ShowAddButton';
import QuestionForm from '../components/QuestionForm';
import QuestionList from './QuestionList';

class QuestionApp extends Component {

  constructor(props){
    super(props)
    let questions = [
      {
        id:1,
        title: 'React 是什么',
        description: '用于构建用户界面的JavaScript 库, React 是构建大型，快速Web app 的首选方式。它已经在Facebook 和Instagam 被我们有了广泛应用。',
        voteCount: 10
      },
      {
        id:2,
        title: 'React 编程思想',
        description: '在我看来，React 是构建大象，快速Web app 的首选方式。它已经在Facebook 和Instagram 被我们有了广泛的应用。React 许多优秀的部分之一，是它使得你在构建app 的过程中不断思考。',
        voteCount: 22
      },
      {
        id:3,
        title: '如何构建一个静态版本app 来渲染你的数据模型',
        description: '你将会想到一个重用其他组件并利用props 传递数据的组件。props 是一种从父级传递数据到子级的方式。如果你对state 的观念很熟悉，绝不要用state 来构建这个静态版本。State 仅仅是为了互动性，也就是随事件变化的数据所预留的。由于这是一个静态版本，你还不需要用到她。',
        voteCount: 97
      }
    ]
    this.state = {
      onToggleForm: false,
      questions: questions
    }
  }

  onToggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  onNewQuestion(newQuestion){
    newQuestion.id = this.state.questions.length + 1;
    let newQuestions = this.state.questions.concat(newQuestion)
    this.setState({
      questions: newQuestions
    })
  }

  onVote(key, newCount){
      let newQuestion = this.state.questions.map(function(v, k, q){
        if(v.id === key){
          v.voteCount = newCount;
        }
        return v;
      })

      this.setState({
        questions: newQuestion
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
            onToggleForm={()=>this.onToggleForm()}
            onNewQuestion={(e)=>this.onNewQuestion(e)}/>
          <QuestionList
            questions={this.state.questions}
            onVote={(key, newCount)=>this.onVote(key, newCount)}/>
        </div>
      </div>
    )
  }
}

export default QuestionApp;
