import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

class QuestionList extends Component {
  render() {
    let questions = this.props.questions
    let questionsComp = questions.map(function(q){
      return <QuestionItem
                key={q.id}
                questionKey={q.id}
                title={q.title}
                desc={q.description}
                voteCount={q.voteCount}/>
    })
    return (
      <div id="questions">
        {questionsComp}
      </div>
    )
  }
}

export default QuestionList;
