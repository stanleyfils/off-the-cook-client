// modal signup form code

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
        console.log(context);

        const {
          formSignup: { username, email, password },
          message,
          isLoggedIn,
        } = context.state;

        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <div>
                <form
                  onSubmit={handleSignupSubmit}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <label htmlFor="username">
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
                    </label>
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
                  <div>
                    <Button
                      //   className="signup-submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
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
