import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Components/Pages/Landing";
import Home from "./Components/Pages/Home";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import { RecipeList, SpoonacularService } from "./Services/RecipeService";
import RecipeDetails from "./Services/RecipeDetailsService";
import RecipeBookList from "./Services/RecipeBookService";
import RecipeBookDetails from "./Services/RecipeBookDetailsService";
// import SavedRecipes from "./Components/Recipes/SavedRecipes";

function App() {
  return (
    <section>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recipes" component={RecipeList} />
          {/* <Route exact path="/recipes" component={SavedRecipes} /> */}
          <Route exact path="/recipes/:recipeId" component={RecipeDetails} />
          <Route exact path="/recipeBooks" component={RecipeBookList} />
          <Route exact path="/searchRecipes" component={SpoonacularService} />
          <Route
            exact
            path="/recipeBooks/:recipeBookId"
            component={RecipeBookDetails}
          />
        </Switch>
      </div>
    </section>
  );
}

export default App;
