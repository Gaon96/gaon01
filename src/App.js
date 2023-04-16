import React, { useState } from 'react'
import './styles/main.scss'
import qList from './data/Question.json'
import QuestionList from './components/QuestionList'
import TxtList from './components/TxtList'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

function App() {
  const [showId, setshowId] = useState('')

  return (
    <div className="main">
      <div>
        <AudioPlayer
          className="my_audio_player"
          src={process.env.PUBLIC_URL + '/song/sound.mp3'}
          autoPlay
          loop
          onPlay={() => console.log('onPlay')}
          alt="Track - Scott Buckley - Ashes of a Fallen Year Soundcloud - http://bit.ly/2iAj8Vy 나눔뮤직 - https://tv.naver.com/v/11469898"
        />
        <p className="AudioPlayer_txt">
          Track - Scott Buckley - Ashes of a Fallen Year
        </p>
      </div>
      <div className="blur"></div>
      <div className="character">
        <div className="hair">
          <img
            className="hair01"
            src="https://jihae1996.github.io/gaon01/hair/hair_01.png"
          ></img>
          <img
            className="hair02"
            src="https://jihae1996.github.io/gaon01/hair/hair_02.png"
          ></img>
          <img
            className="hair03"
            src="https://jihae1996.github.io/gaon01/hair/hair_03.png"
          ></img>
          <img
            className="hair04"
            src="https://jihae1996.github.io/gaon01/hair/hair_04.png"
          ></img>
          <img
            className="hair05"
            src="https://jihae1996.github.io/gaon01/hair/hair_05.png"
          ></img>
        </div>
        <div className="face">
          <img
            className="face01"
            src="https://jihae1996.github.io/gaon01/face/face01.png"
          ></img>
          <img
            className="face02"
            src="https://jihae1996.github.io/gaon01/face/face02.png"
          ></img>
          <img
            className="face03"
            src="https://jihae1996.github.io/gaon01/face/face03.png"
          ></img>
        </div>
        <div className="body">
          <img
            className="body01"
            src="https://jihae1996.github.io/gaon01/body/body01.png"
          ></img>
          <img
            className="body02"
            src="https://jihae1996.github.io/gaon01/body/body02.png"
          ></img>
          <img
            className="body03"
            src="https://jihae1996.github.io/gaon01/body/body03.png"
          ></img>
          <img
            className="body04"
            src="https://jihae1996.github.io/gaon01/body/body04.png"
          ></img>
          <img
            className="body05"
            src="https://jihae1996.github.io/gaon01/body/body05.png"
          ></img>
        </div>
        <div className="wing">
          <img
            className="wing01"
            src="https://jihae1996.github.io/gaon01/wing/wing01.png"
          ></img>
          <img
            className="wing02"
            src="https://jihae1996.github.io/gaon01/wing/wing02.png"
          ></img>
          <img
            className="wing03"
            src="https://jihae1996.github.io/gaon01/wing/wing03.png"
          ></img>
          <img
            className="wing04"
            src="https://jihae1996.github.io/gaon01/wing/wing04.png"
          ></img>
        </div>
      </div>
      <div className="e_wrap bg01">
        <video
          className="video"
          src="https://jihae1996.github.io/gaon01/videos/video.mp4"
          autoPlay
          loop
          muted
        />
        <div className="question_box">
          <div className="question_txt">
            {qList.map(qList => (
              <div
                className="question_txt_inner"
                onClick={() => {
                  setshowId(qList.id)
                }}
              >
                <QuestionList propstitle={qList.title} propstxt={qList.txt} />
              </div>
            ))}
          </div>
        </div>
        <div className="inner">
          <div className="script_box">
            <div className="txt_wrap">
              <TxtList className="ActiveList" id={showId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
