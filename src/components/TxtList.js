import React from 'react'
import Txtmap from '../data/Txt.json'
import '../styles/txt.scss'

function txtList({ id }) {
  const propstxt = () => {
    const result = Txtmap.find(data => data.id === id)
    if (id === '') {
      return '(언노운은 의미심장한 표정으로 나를 바라보고 있다.)'
    }
    return result.text
  }
  return (
    <div className="txtlist_main">
      <p>{`${propstxt()}`}</p>
    </div>
  )
}

export default txtList
