import React from "react"
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
          <h1 style={{ color: "black" }}>RICO</h1>
          <h1>TREBELJAHR</h1>
          <h2 style={{ color: "black" }} className="cv-job-title">
            SOFTWARE ENGINEER
          </h2>
        </div>
        <div className="cv-contact-info">
          <a href="mailto:ricotrebeljahr@gmail.com">ricotrebeljahr@gmail.com</a>
          <a href="https://ricotrebeljahr.com">ricotrebeljahr.com</a>
          <a href="https://github.com/trebeljahr">github.com/trebeljahr</a>
          <a href="https://www.linkedin.com/in/trebeljahr/">
            linkedin.com/in/trebeljahr/
          </a>
        </div>
      </div>
      <div className="cv-section">
        <h3>ABOUT ME</h3>
        <p>
          I am a self-taught developer from Berlin. Someone, who is constantly
          striving to become a little better every day. I just love learning new
          things. But even more than learning, I love to use what I have learned
          to build awesome things. Mostly on the web.
        </p>
      </div>
      <div className="cv-section cv-main-section">
        <h1 style={{ color: "black" }}>WORK</h1>
        <div className="cv-divider" />
      </div>
      <div className="cv-section">
        <div>
          <h3>KLARNA</h3>
          <p className="cv-date">Jan. 2021 - Jul. 2021</p>
        </div>
        <p>
          I was working at Klarna for 6 months in the beginning of 2021 as a
          Software Engineer Level II, as part of their chrome browser extension
          team. There I helped to automate chrome browser extension testing with
          cypress and wrote a notifications feature for the browser extension.
        </p>
      </div>
      <div className="cv-section">
        <div>
          <h3>SOFTGAMES</h3>
          <p className="cv-date">Jun. 2021 - Apr. 2021</p>
        </div>
        <p>
          I was working at Softgames as a Junior Full Stack Developer for 9
          months between 2019 and 2020. There I built a large-scale multiplayer
          server using Golang and a Typescript/RxJS client library to adapt to
          the changing requirements of the frontend team.
        </p>
      </div>

      <div className="cv-section cv-main-section">
        <h1 style={{ color: "black" }}>PERSONAL PROJECTS</h1>
        <div className="cv-divider" />
      </div>

      <div className="cv-section">
        <div>
          <h3>MINECRAFT CLONE</h3>
          <p className="cv-date">2021</p>
        </div>
        <p>
          During this project I learned a lot of how to work with ThreeJS and
          about meshing, lighting and in general voxel based games. The chunk
          generation is still slow and there are still lots of bugs but you
          should be able to play it here:
          <a href="https://mc.ricotrebeljahr.com"> mc.ricotrebeljahr.com</a>
        </p>
      </div>
      <div className="cv-section">
        <div>
          <h3>SELF-LEARNING PHASE</h3>
          <p className="cv-date">2020</p>
        </div>
        <p>
          During the second half of 2020 I spent most of my days working through
          coursera courses on machine learning/Python and some DevOps... I
          finished a whole bunch of them, You can see the certificates
          <a href="https://www.linkedin.com/in/trebeljahr/"> on my LinkedIn.</a>
        </p>
      </div>

      <div className="cv-section">
        <div>
          <h3>PORTFOLIO PAGE</h3>
          <p className="cv-date">2020</p>
        </div>

        <p>
          In this project I gained a lot of experience building progressive web
          apps and utilizing server side rendering. The combined powers of
          Gatsby and Netlify make for a website hosted completely for free. You
          can view it at
          <a href="https://ricotrebeljahr.com"> ricotrebeljahr.com</a>
        </p>
      </div>
      <div className="cv-section">
        <div>
          <h3>CHESS APP</h3>
          <p className="cv-date">2019</p>
        </div>

        <p>
          In this app users are able to play chess against their friends. I
          built this full stack app using Meteor and React. It features user
          authentication, core chess game logic, a React view layer, game
          histories, matchmaking mechanics, move reversals, in game-chat and
          data persistence. You can play a round here:
          <a href="https://chess.ricotrebeljahr.de"> chess.ricotrebeljahr.de</a>
        </p>
      </div>

      <div className="cv-section cv-main-section">
        <h1 style={{ color: "black" }}>SKILLS</h1>
        <div className="cv-divider" />
      </div>
      <div className="cv-section">
        <h3>OVERVIEW</h3>
        <ul>
          <li>Full Stack Development</li>
          <li>JAM/MERN Stack</li>
          <li>Server Side Rendered Apps</li>
          <li>Progressive Web Apps</li>
          <li>Multiplayer Game Servers</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>TECHNOLOGIES</h3>
        <ul>
          <li>JavaScript, HTML, CSS</li>
          <li>Golang, Python, TypeScript </li>
          <li>and a bunch of other languages, fan of Haskell, Clojure, Rust</li>
          <li>React.js, Next.js, Gatsby, Three.js, Pixi.js, p5.js</li>
          <li>Node.js, Express.js, Meteor.js</li>
          <li>Jest, Enzyme, Cypress</li>
          <li>RxJS (or most.js or any ol' observable library), Redux </li>
          <li>DB/Query-Languages: MongoDB, GraphQl, SQL</li>
          <li>TensorFlow, PyTorch</li>
          <li>Bash and I love Vim</li>
        </ul>
      </div>
    </div>
  )
}

export default CV
