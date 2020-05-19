import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../css/section.css"

const Section = ({ headline, href, img, nextSection, active }) => {
  const speed = 200
  const waitBeforeDelete = 2000
  const waitBeforeChange = 700
  const deleteSpeed = 60
  const [timer, setTimer] = useState(0)
  const [wait, setWait] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)

  const count = () => {
    setCharacterIndex(old => old + 1)
  }

  const countDown = () => {
    setCharacterIndex(old => old - 1)
  }

  const changeToNext = () => {
    nextSection()
    setCharacterIndex(0)
  }

  useEffect(() => {
    if (characterIndex >= headline.length) {
      clearInterval(timer)
      const startDeleting = () => setTimer(setInterval(countDown, deleteSpeed))
      setTimeout(startDeleting, waitBeforeDelete)
    }
    if (characterIndex < 0) {
      clearInterval(timer)
      setWait(() => {
        clearTimeout(wait)
        return setTimeout(changeToNext, waitBeforeChange)
      })
    }
  }, [characterIndex])

  useEffect(() => {
    if (active) {
      setTimer(() => setInterval(count, speed))
      setCharacterIndex(0)
      return () => {
        clearInterval(timer)
        clearTimeout(wait)
      }
    }
    clearInterval(timer)
    clearTimeout(wait)
  }, [active])

  const person =
    headline.slice(0, characterIndex < 0 ? 0 : characterIndex) + " "
  return (
    <div className={!active ? "hidden" : "activeSection"}>
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
