import React, { Component } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './Modal.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
}
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className='signup-button' type="button" onClick={handleOpen}>
        Signup
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div id="modal-box" className={classes.paper}>
            <h2 className="signup-text" id="transition-modal-title">Signup</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className="input" id="outlined-basic" label="email" variant="outlined" />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className="input" id="outlined-basic" label="password" variant="outlined" />
            </form>
            <p id="transition-modal-description">Already have an account?</p>
            <Typography className={classes.root}>
                <Link href="#" onClick={preventDefault}>
                    Link
                </Link>
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
