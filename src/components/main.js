import React from "react"
import Section from "./section"
import MobileMenu from "./menus/Mobile"
import "../css/main.css"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wait: 0,
      counter: 0,
      headlines: ["Programmer", "Photographer", "Traveler"],
      hrefs: ["/coding", "/photography", "https://photodyssee.com"],
    }
  }
  componentDidMount = () => {
    this.setState({
      waitInterval: setInterval(this.changeSection, 5000),
      interval: setInterval(this.count, 200),
    })
  }
  count = () => {
    if (
      this.state.counter === this.state.headlines[this.state.wait % 3].length
    ) {
      clearInterval(this.state.interval)
    } else {
      this.setState(() => ({ counter: this.state.counter + 1 }))
    }
  }
  changeSection = () => {
    this.setState(() => ({
      wait: this.state.wait + 1,
      counter: 0,
      interval: setInterval(this.count, 200),
    }))
  }
  componentWillUnmount = () => {
    clearInterval(this.state.waitInterval)
    clearInterval(this.state.interval)
  }
  render() {
    let section = this.state.wait % 3
    let headline = this.state.headlines[section]
    let word = headline.slice(0, this.state.counter)
    let href = this.state.hrefs[section]
    return (
      <div className="wrapper">
        <div className="fixed">
          <MobileMenu />
        </div>
        <Section
          images={this.state.headlines.map(
            headline => headline.toLowerCase() + ".jpg"
          )}
          img={headline.toLowerCase() + ".jpg"}
          headline={word}
          href={href}
          counter={section}
        />
      </div>
    )
  }
}
export default Main
