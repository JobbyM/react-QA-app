import React, { Component } from 'react';
import './QuestionForm.css';

class QuestionForm extends Component {
  render() {
    return (
      <form action="" className="clearfix" name="addQuestion">
        <div className="form-group">
          <label htmlFor="qtitle">问题</label>
          <input type="text" className="form-control" id="qtitle" placeholder="您的问题标题" />
        </div>
        <div className="form-group">
          <label htmlFor="qdesc" className="src-only" >问题描述</label>
          <textarea name="qdesc" id="qdesc" rows="3" className="form-control" placeholder="问题的描述"></textarea>
        </div>
        <button className="btn btn-success pull-right">确认</button>
        <button className="btn btn-default pull-right">取消</button>
      </form>
    )
  }
}

export default QuestionForm;
