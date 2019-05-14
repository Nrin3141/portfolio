import PropTypes from "prop-types";
import classNames from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
import { withStyles } from "@material-ui/core/styles";
import Menu from "../components/Menu";
import Header from "../components/Headers";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

import { theme } from "../config/theme.js";
import _JSXStyle from "styled-jsx/style";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  inputs: {
    display: "flex",
    width: "80vw",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  paper: {
    textAlign: "center",
    padding: 20,
    margin: 20
  },
  button: {
    margin: "20px 0",
    padding: 10,
    width: "50%",
    alignSelf: "center"
  },
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    minHeight: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    overflow: "hidden"
  },
  input: {
    flexGrow: 20,
    margin: "1vw"
  },
  message: {
    width: "78vw"
  }
};
class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiline: "",
      name: "",
      email: "",
      subject: "",
      res: false
    };
    this.recaptchaRef = React.createRef();
  }
  submit = e => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      message: e.target.message.value,
      name: e.target.name.value,
      subject: e.target.subject.value,
      captcha: grecaptcha.getResponse()
    };
    fetch("/contact", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ res }));
  };
  componentDidUpdate = () => {
    //console.log(this.state);
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.outer}>
        {this.state.res && !this.state.res.responseCode ? (
          <Paper className={classes.paper}>
            <h1>Good news! </h1>
            <h2 style={{ fontWeight: "100" }}>
              Your message is on the way ...
            </h2>
            <Link href="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Home
              </Button>
            </Link>
          </Paper>
        ) : (
          <Paper className={classes.paper}>
            <form
              onSubmit={this.submit}
              className={classes.container}
              noValidate
              autoComplete="off"
            >
              <div className={classes.inputs}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  className={classes.input}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  error={
                    this.state.res &&
                    this.state.res.errors &&
                    this.state.res.errors[0].param === "email"
                  }
                  id="outlined-email"
                  label="Email"
                  name="email"
                  value={this.state.email}
                  className={classes.input}
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
                className={classes.message}
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
                className={classes.message}
                variant="outlined"
              />
              <ReCAPTCHA
                ref={this.recaptchaRef}
                sitekey="6LfOuqIUAAAAALhxD0-qBaJNQHsVVyktV_Uo3DUK"
              />
              {/*<div
                className="g-recaptcha"
                data-sitekey={process.env.RECAPTCHA_API_PUBLIC_KEY.toString()}
                data-callback={this.successfulForm}
              />*/}
              <Button
                variant="contained"
                color="secondary"
                id="submit"
                type="submit"
                className={classes.button}
              >
                Get in touch
              </Button>
            </form>
          </Paper>
        )}
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
