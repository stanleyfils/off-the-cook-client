import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const RecipeBookService = {
  createRecipeBook(title, description) {
    return service.post("/addRecipeBook", title, description, {
      withCredentials: true,
    });
  },

  // GET route to see all recipe books
  getRecipeBooks() {
    return service.get("/recipeBooks", { withCredentials: true });
  },

  // GET route for getting the recipe book details
  getRecipeBookDetails(recipeBookId) {
    return service.get(`/recipeBooks/${recipeBookId}`, {
      withCredentials: true,
    });
  },

  // POST route to delete a recipe book
  deleteRecipeBook(recipeBookId) {
    return service.post(`/recipeBooks/${recipeBookId}/delete`, {
      withCredentials: true,
    });
  },

  // POST route to save recipe book updates
  updateRecipeBook(recipeBookId) {
    return service.post(`/recipeBooks/${recipeBookId}/update`, {
      withCredentials: true,
    });
  },
};

export default RecipeBookService;

// // get recipe book List

// import React, { Component } from "react";
// import axios from "axios";
// import AddRecipeBook from "./AddRecipeBookService";
// import { Route, Switch, Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

// class RecipeBookList extends Component {
//   state = {
//     recipeBookList: [],
//   };

//   // here we call the function to make the axios call which gets all the recipe books from the db, we must do this prior to the render in order to get the needed information so that we can use that information to display something in the component allowing axios to make its request and receive its response.
//   componentDidMount() {
//     this.getRecipeBookList();
//   }

//   // this function will pass down to the add trip child component which will allow us to update the state for the this (the parent) component and display the updated full list of recipe books
//   newRecipeBookAdded = () => {
//     this.getRecipeBookList();
//   };

//   // after we delete the recipe book from the db we will need to then call the function which gets all the trips from the db in order to update the list with the deleted recipe book missing.
//   deleteRecipeBook = (recipeBookId) => {
//     axios
//       .post(`http://localhost:3001/recipeBooks/${recipeBookId}/delete`)
//       .then((messageAfterDeletingRecipeBook) => {
//         console.log({ messageAfterDeletingRecipeBook });
//         this.getRecipeBookList();
//       })
//       .catch((err) => console.log({ err }));
//   };

//   // this function will be used in order to get the full list of recipe books as well as update the state whenever we make a change like adding or deleting a recipe book.
//   getRecipeBookList = () => {
//     axios
//       .get("http://localhost:3001/recipeBooks")
//       .then((recipeBookListFromAPI) => {
//         this.setState({ recipeBookList: recipeBookListFromAPI.data });
//       })
//       .catch((err) => console.log({ err }));
//   };

//   showRecipeBooks = () => {
//     return this.state.recipeBookList.length === 0 ? (
//       <h2>No Recipe Books to Display</h2>
//     ) : (
//       this.state.recipeBookList.map((recipeBook, i) => {
//         return (
//           <div key={i}>
//             <h2>
//               <Link to={`/recipeBooks/${recipeBook._id}`}>
//                 {recipeBook.recipeBookTitle}
//               </Link>
//             </h2>
//             {/* <h2>{recipeBook.recipeBookTitle}</h2> */}
//             <h3>{recipeBook.title}</h3>
//             {/* <h4>Description: {recipeBook.description}</h4> */}
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={() => this.deleteRecipeBook(recipeBook._id)}
//             >
//               Delete
//             </Button>
//           </div>
//         );
//       })
//     );
//   };

//   render() {
//     return (
//       <div>
//         {/* <AddRecipeBook updateState={this.newRecipeBookAdded} /> */}
//         <hr />
//         {this.state.recipeBookList && this.showRecipeBooks()}
//       </div>
//     );
//   }
// }

// export default RecipeBookList;
