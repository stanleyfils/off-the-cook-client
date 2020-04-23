// signup form in modal

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Signup.css';

const useStyles = makeStyles((theme) => ({
    // required for <TextField>
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className="input" id="outlined-basic" label="email" variant="outlined" />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className="input" id="outlined-basic" label="password" variant="outlined" />
        </form> 
      </div>
  );
}
