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
    <Layout withNavigation={false} withFooter={false}>
      <div className="cvContainer">
        <Img className="circular cv-image" fluid={data.file.img.fluid} />

        <h1>RICO</h1>
        <h1>TREBELJAHR</h1>
        <p>ricotrebeljahr@gmail.com</p>
        <p>https://ricotrebeljahr.com</p>
        <h2>PORTFOLIO</h2>
        <h2>PAGE</h2>
        <h2>CHESS APP</h2>
        <h2>FULLSTACK DEVELOPER</h2>
        <p>
          In this app users are able to play chess against their friends. I
          built this full stack app using Meteor and React. It features user
          authentication, core chess game logic, a React view layer, game
          histories, matchmaking mechanics, move reversals, in game-chat and
          data persistence. You can play a round here:
          https://chess.ricotrebeljahr.de
        </p>
        <p>
          In project I gained a lot of experience building progressive web apps
          and utilizing server side rendering. The combined powers of Gatsby and
          Netlify make for a website hosted completely for free. You can view it
          at https://ricotrebeljahr.com
        </p>
        <p>
          I am a self-taught developer from Berlin, who is constantly learning
          new things and striving to become a little better every day. Then I
          use what I have learned to build awesome stuff with code.
        </p>
        <h2>ABOUT ME</h2>
        <h2>PROJECTS</h2>
        <p>Full Stack Development</p>
        <p>JAM/MERN Stack</p>
        <p>Server Side Rendered Apps</p>
        <p>Progressive Web Apps</p>
        <p>Multiplayer Game Servers</p>
        <h2>OVERVIEW</h2>
        <p>JavaScript, HTML, CSS</p>
        <p>Golang</p>
        <p>React.js, Next.js, Gatsby</p>
        <p>Typescript</p>
        <p>Node.js, Express.js</p>
        <p>DB/Query-Languages: MongoDB, GraphQl, SQL</p>
        <h2>TECHNOLOGIES</h2>
        <h2>SKILLS</h2>
        <h2>MULTIPLAYER</h2>
        <h2>SERVER</h2>
        <p>
          While working at a games company as a Full Stack Developer in 2019 I
          built a scale multiplayer server using Golang and a Typescript/RxJS
          client library to adapt to the changing requirements of frontend team.
        </p>
      </div>
    </Layout>
  )
}

export default CV
