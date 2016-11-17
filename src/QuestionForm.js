import React, { Component } from 'react';
import './QuestionForm.css';

class QuestionForm extends Component {
  submitHandle(e) {
    e.preventDefault();
    if(!this.refs.title.value) return;

    let newQuestion = {
      title: this.refs.title.value,
      description: this.refs.desc.value,
      voteCount: 0,
    }

    this.refs.addQuestionForm.reset();

    this.props.onNewQuestion(newQuestion)
  }

  render() {
    let styleObj = {
      display: this.props.formDisplay ? 'block' : 'none'
    }
    return (
      <form ref="addQuestionForm" action="" className="clearfix" name="addQuestion" style={styleObj} onSubmit={(e)=>this.submitHandle(e)}>
        <div className="form-group">
          <label htmlFor="qtitle">问题</label>
          <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题标题" />
        </div>
        <div className="form-group">
          <label htmlFor="qdesc" className="src-only" >问题描述</label>
          <textarea ref="desc" name="qdesc" id="qdesc" rows="3" className="form-control" placeholder="问题的描述"></textarea>
        </div>
        <button className="btn btn-success pull-right">确认</button>
        <button className="btn btn-default pull-right" onClick={()=>this.props.onToggleForm()}>取消</button>
      </form>
    )
  }
}

export default QuestionForm;
