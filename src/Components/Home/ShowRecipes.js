import React from "react";

const showRecipes = (props) => {
  console.log(props);
  const recipes = props.recipes || [];
  return (
    <div>
      <h1>Test</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default showRecipes;
