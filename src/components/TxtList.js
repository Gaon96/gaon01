import React, { useState } from 'react'
import Txtmap from '../data/Txt.json'
import '../styles/txt.scss'

function TxtList({ id }) {
  const propstitle = () => {
    const result = Txtmap.find(data => data.id === id)
    if (id === '') {
      return ''
    }
    return result.title
  }

  const propstxt01 = () => {
    const result = Txtmap.find(data => data.id === id)
    if (id === '') {
      return '이웨카 아래의 새벽 공기처럼 은은하게 피어 오는 선선함. 은발이 덮인 하얀 남성의 모습이 공허하다. 그리운 것 같으면서도 깊은 눈동자가 공허의 모습을 비추듯 당신을 쳐다본다.'
    }
    return result.text01
  }

  const propstxt02 = () => {
    const result = Txtmap.find(data => data.id === id)
    if (id === '') {
      return '(언노운은 흐릿한 표정으로 나를 바라보고 있다.)'
    }
    return result.text02
  }

  const propstxt03 = () => {
    const result = Txtmap.find(data => data.id === id)
    if (id === '') {
      return ''
    }
    return result.text03
  }

  const propsimg = () => {
    const result = Txtmap.find(data => data.id === id)
    if (id === '') {
      return 'none.png'
    }
    return result.image01
  }

  const propsbtn = () => {
    const result = Txtmap.find(data => data.id === id)
    if (id === '') {
      return 'null'
    }
    return result.btn
  }

  const [isActive00, setIsActive00] = useState(false)
  const [isActive01, setIsActive01] = useState(false)
  const [isActive02, setIsActive02] = useState(false)

  const handleClick01 = () => {
    setIsActive00(!isActive00)
    setIsActive01(!isActive01)
    setIsActive02(false)
  }

  const handleClick02 = () => {
    setIsActive01(false)
    setIsActive02(!isActive02)
  }

  const handleClick03 = () => {
    setIsActive02(false)
    setIsActive00(!isActive00)
  }

  const buttonClass00 = isActive00 ? ' ' : 'active'
  const buttonClass01 = isActive01 ? 'active' : ''
  const buttonClass02 = isActive02 ? 'active' : ''

  return (
    <div className="txtlist_main">
      <div className={`txt01${buttonClass00}`}>
        <p className="title">{`${propstitle()}`}</p>
        <p>{`${propstxt01()}`}</p>
        <p>{`${propstxt02()}`}</p>
        <p>{`${propstxt03()}`}</p>
        <div className="txtlist_img">
          <img
            className="script_discription"
            src={`https://jihae1996.github.io/gaon01/scriptimages/${propsimg()}`}
          ></img>
        </div>
        {/* <button onClick={handleClick01}>{`${propsbtn()}`}</button> */}
      </div>
      {/* <div className={`txt02 ${buttonClass01}`}>
        <p>{`${propstxt02()}`}</p>
        <img
          className="script_discription"
          src={`/scriptimages/${propsimg()}`}
        ></img>
        <button onClick={handleClick02}>다음</button>
      </div>
      <div className={`txt03 ${buttonClass02}`}>
        <p>{`${propstxt03()}`}</p>
        <img
          className="script_discription"
          src={`/scriptimages/${propsimg()}`}
        ></img>
        <button onClick={handleClick03}>즐겁게 대화한것 같다</button>
      </div> */}
    </div>
  )
}

export default TxtList
