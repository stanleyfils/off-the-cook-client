import React, { Component } from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Signup from "./Signup";
import Link from "./Login";
import "./Modal.css";
import SignupButton from "./SignupButton";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="signup-button" type="button" onClick={handleOpen}>
        Sign Up
      </button>
      <SignupButton type="button" onClick={handleOpen} />
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
            <h2 className="signup-text" id="transition-modal-title">
              Sign Up
            </h2>
            <Signup className="input" />
            <p id="transition-modal-description">Already have an account?</p>
            <Link to="/login" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
