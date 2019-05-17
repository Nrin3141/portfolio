import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import { Link } from "gatsby"
import { ReCaptcha } from "react-recaptcha-v3"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../../utils/getPageContext.js"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      multiline: "",
      name: "",
      email: "",
      subject: "",
      res: false,
      recaptcha: null,
    }
  }
  verifyCallback = recaptchaToken => {
    this.setState({ recaptcha: recaptchaToken })
  }
  submit = e => {
    e.preventDefault()
    if (this.state.recaptcha) {
      const data = {
        email: e.target.email.value,
        message: e.target.message.value,
        name: e.target.name.value,
        subject: e.target.subject.value,
        captcha: this.state.recaptcha,
      }
      fetch("https://contact.ricotrebeljahr.de", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.setState({ res, errors: res.errors })
        })
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="outer">
          {this.state.res && !this.state.res.responseCode ? (
            <Paper className="muipaper">
              <h1>Good news! </h1>
              <h2 style={{ fontWeight: "100" }}>
                Your message is on the way ...
              </h2>
              <Link to="/">
                <Button
                  variant="contained"
                  color="secondary"
                  className="button"
                >
                  Home
                </Button>
              </Link>
            </Paper>
          ) : (
            <Paper className="muipaper">
              <form
                onSubmit={this.submit}
                className="container"
                noValidate
                autoComplete="off"
              >
                <div className="inputs">
                  <TextField
                    id="outlined-name"
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    className="input"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    error={
                      this.state.errors &&
                      this.state.errors[0].param === "email"
                    }
                    id="outlined-email"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    className="input"
                    onChange={this.handleChange("email")}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <TextField
                  id="outlined-subject"
                  label="Subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange("subject")}
                  className="message"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-textarea"
                  label="Message"
                  name="message"
                  multiline
                  rowsMax="10"
                  margin="normal"
                  className="message"
                  variant="outlined"
                  style={{ marginBottom: "5vh" }}
                />
                <ReCaptcha
                  sitekey={"" + process.env.GATSBY_RECAPTCHA_API_PUBLIC_KEY}
                  action="action_name"
                  verifyCallback={this.verifyCallback}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  id="submit"
                  type="submit"
                  className="button"
                >
                  Get in touch
                </Button>
              </form>
            </Paper>
          )}
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }
          .inputs {
            display: flex;
            width: 80vw;
            flex-direction: column;
            justify-content: space-around;
          }
          @media only screen and (min-width: 600px) {
            .inputs {
              flex-direction: row;
            }
          }
          .outer :global(.muipaper) {
            text-align: center;
            padding: 20px;
            margin: 20px;
          }
          .outer :global(.button) {
            margin: 20px 0;
            padding: 10px;
            width: 50%;
            align-self: center;
          }
          .outer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 100%;
            overflow: hidden;
          }
          .outer :global(.input) {
            flex-grow: 20;
            margin: 10px 1vw;
          }
          .outer :global(.message) {
            width: 78vw;
            margin: 10px;
          }
        `}</style>
      </MuiThemeProvider>
    )
  }
}

export default ContactForm
