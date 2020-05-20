import React, { useState, useEffect, useCallback, useRef } from "react"
import Img from "gatsby-image"
import "../css/section.css"

function useInterval(callback, delay) {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Section = ({ headline, img, nextSection, active }) => {
  const speed = 200
  const waitBeforeDelete = 2000
  const waitBeforeChange = 700
  const deleteSpeed = 60
  const [deletionTimer, setDeletionTimer] = useState(0)
  const [wait, setWait] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)

  const changeToNext = useCallback(() => {
    nextSection()
    setCharacterIndex(0)
  }, [nextSection])

  const countDown = () => {
    setCharacterIndex(old => old - 1)
  }
  const countUp = () => {
    setCharacterIndex(old => old + 1)
  }

  const [countingUp, setCountingUp] = useState(true)
  const [countingDown, setCountingDown] = useState(false)

  useEffect(() => {
    if (characterIndex < 0) {
      setCountingDown(false)
      setWait(
        setTimeout(() => {
          setCountingUp(true)
          changeToNext()
        }, waitBeforeChange)
      )
    }
    if (characterIndex >= headline.length) {
      setCountingUp(false)
      setDeletionTimer(
        setTimeout(
          () => setDeletionTimer(setCountingDown(true, deleteSpeed)),
          waitBeforeDelete
        )
      )
    }
  }, [characterIndex, headline, changeToNext])

  useEffect(() => {
    return () => {
      clearTimeout(wait)
      clearTimeout(deletionTimer)
    }
  }, [deletionTimer, wait])

  useInterval(countUp, active && countingUp ? speed : null)
  useInterval(countDown, active && countingDown ? deleteSpeed : null)

  const person =
    headline.slice(0, characterIndex < 0 ? 0 : characterIndex) + " "
  return (
    <div className={!active ? "hidden-section" : "active-section"}>
      <Img className="section-image" fluid={img} />
      <div className="section-container">
        <div className="section-header">
          <h1>I am a&nbsp;{person}</h1>
          <span className="blinking-dash" />
        </div>
      </div>
    </div>
  )
}

export default Section
