import React from 'react'
import '../styles/question.scss'

function QuestionList({ propstitle, propstxt }) {
  return (
    <div className="questionList_main">
      <button>{propstitle}</button>
      <p className="txt">{propstxt}</p>
    </div>
  )
}

export default QuestionList
