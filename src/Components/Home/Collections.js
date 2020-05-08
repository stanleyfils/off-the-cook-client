import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import "./Collections.css";
import Footer from "../../home.nosync.png";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > span": {
//       margin: theme.spacing(2),
//     },
//   },
// }));

export default function Collections() {
  //   const classes = useStyles();

  return (
    <>
      <section className="sectionBackground">
        <h2>Collections</h2>
        {/* <div className={classes.root}> */}
        <div>
          <Icon className="iconButton" color="primary" style={{ fontSize: 50 }}>
            add_circle
          </Icon>
        </div>
      </section>
      {/* <hr className="hrTag" /> */}
    </>
  );
}
