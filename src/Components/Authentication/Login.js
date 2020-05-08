import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Signup.css";
import "./Login.css";
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

function Login() {
  const classes = useStyles();
  return (
    <AuthContext.Consumer>
      {(context) => {
        // console.log("testing context!", context);

        const {
          formLogin: { email, password },
          isLoggedIn,
        } = context.state;
        // console.log("login", email, password);
        const { handleLoginInput, handleLoginSubmit } = context;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/home" />
            ) : (
              <div>
                <h1>Login</h1>
                <form
                  onSubmit={handleLoginSubmit}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <br />
                  <TextField
                    className="input"
                    id="outlined-basic email"
                    label="email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleLoginInput}
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
                    onChange={handleLoginInput}
                  />
                  <br />
                  <Button
                    onClick={handleLoginSubmit}
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

export default Login;
