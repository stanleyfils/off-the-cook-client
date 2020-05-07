// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     // root required for <Link>
//   root: {
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

// export default function Links() {
//   const classes = useStyles();
// //   required for <Link>
//   const preventDefault = (event) => event.preventDefault();

//   return (
//       <div>
//         <Typography className={classes.root}>
//             <Link href="#" onClick={preventDefault}>Log in</Link>
//         </Typography>
//       </div>
//   );
// }

// modal signup form
// signup modal button located in Navbar

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

function Login() {
  const classes = useStyles();
  return (
    <AuthContext.Consumer>
      {(context) => {
        console.log("testing context!", context);

        const {
          formLogin: { email, password },
          message,
          isLoggedIn,
        } = context.state;
        console.log("login", email, password);
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
