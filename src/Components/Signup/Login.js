/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    // root required for <Link>
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
//   required for <Link>
  const preventDefault = (event) => event.preventDefault();

  return (
      <div>
        <Typography className={classes.root}>
            <Link href="#" onClick={preventDefault}>Log in</Link>
        </Typography>
      </div>
  );
}
