// controls home page "Collections" section and add recipe book icon/functionality

import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import "./Collections.css";
// import Footer from "../../home.nosync.png";
import AddRecipeBook from "./AddRecipeBook";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > span": {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// const AddCircleButton = () => {};

export default function Collections(props) {
  let books;
  if (props.recipeBooks) {
    books = props.recipeBooks.map((book, i) => {
      return (
        <div key={i}>
          <Link to={`/recipeBooks/${book._id}`}>{book.title}</Link>
        </div>
      );
    });
  }
  return (
    <>
      <section className="sectionBackground">
        <h2>Collections</h2>
        {/* <div className={classes.root}> */}
        <div>
          <Link to="/addRecipeBook">
            <Icon
              onClick={AddRecipeBook}
              className="iconButton"
              color="primary"
              style={{ fontSize: 50 }}
            >
              add_circle
            </Icon>
          </Link>
          <div>{books}</div>
        </div>
      </section>
    </>
  );
}
