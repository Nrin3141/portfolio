import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CV = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/rico.jpg" }) {
            img: childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={renderCV}
    />
  )
}

function renderCV(data) {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <Img className="circular cv-image" fluid={data.file.img.fluid} />
        <div className="cv-name-heading">
          <h1>RICO</h1>
          <h1>TREBELJAHR</h1>
          <h2>FULLSTACK DEVELOPER</h2>
        </div>
        <div className="cv-contact-info">
          <p>ricotrebeljahr@gmail.com</p>
          <p>https://ricotrebeljahr.com</p>
        </div>
      </div>

      <h2>ABOUT ME</h2>
      <p>
        I am a self-taught developer from Berlin, who is constantly learning new
        things and striving to become a little better every day. Then I use what
        I have learned to build awesome stuff with code.
      </p>

      <h2>PROJECTS</h2>
      <h3>MULTIPLAYER SERVER</h3>
      <p>
        While working at a games company as a Full Stack Developer in 2019 I
        built a scale multiplayer server using Golang and a Typescript/RxJS
        client library to adapt to the changing requirements of frontend team.
      </p>

      <h3>PORTFOLIO PAGE</h3>
      <p>
        In this project I gained a lot of experience building progressive web
        apps and utilizing server side rendering. The combined powers of Gatsby
        and Netlify make for a website hosted completely for free. You can view
        it at https://ricotrebeljahr.com
      </p>

      <h3>CHESS APP</h3>
      <p>
        In this app users are able to play chess against their friends. I built
        this full stack app using Meteor and React. It features user
        authentication, core chess game logic, a React view layer, game
        histories, matchmaking mechanics, move reversals, in game-chat and data
        persistence. You can play a round here: https://chess.ricotrebeljahr.de
      </p>

      <h2>SKILLS</h2>
      <h3>OVERVIEW</h3>
      <ul>
        <li>Full Stack Development</li>
        <li>JAM/MERN Stack</li>
        <li>Server Side Rendered Apps</li>
        <li>Progressive Web Apps</li>
        <li>Multiplayer Game Servers</li>
      </ul>

      <h3>TECHNOLOGIES</h3>
      <ul>
        <li>JavaScript, HTML, CSS</li>
        <li>Golang</li>
        <li>React.js, Next.js, Gatsby</li>
        <li>Typescript</li>
        <li>Node.js, Express.js</li>
        <li>DB/Query-Languages: MongoDB, GraphQl, SQL</li>
      </ul>
    </div>
  )
}

export default CV
