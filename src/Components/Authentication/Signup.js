// modal signup form
// signup modal button located in NavBar

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Signup.css";
import Button from "@material-ui/core/Button";
// import AuthProvider from '../../context/index';
import { AuthContext } from "../../context/index";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  // required for <TextField>
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

function Signup() {
  const classes = useStyles();
  return (
    <AuthContext.Consumer>
      {(context) => {
        console.log("testing context!", context);

        const {
          formSignup: { username, email, password },
          message,
          isLoggedIn,
        } = context.state;
        console.log("signup", username, email, password);
        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/home" />
            ) : (
              <div>
                <form
                  onSubmit={handleSignupSubmit}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    className="input"
                    id="outlined-basic username"
                    label="username"
                    variant="outlined"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleSignupInput}
                  />
                  <br />
                  <TextField
                    className="input"
                    id="outlined-basic email"
                    label="email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleSignupInput}
                  />
                  <br />
                  <TextField
                    className="input"
                    id="outlined-basic password"
                    label="password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleSignupInput}
                  />
                  <br />
                  <Button
                    //   className="signup-submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            )}
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Signup;
