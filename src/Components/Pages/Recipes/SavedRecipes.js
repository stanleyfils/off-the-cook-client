// render page -> get list of recipes

import React, { Component } from "react";
// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import RecipeList from "../../Services/RecipeService";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const classes = useStyles();

export class SavedRecipes extends Component {
  render() {
    return (
      <div>
        <h2>Your Saved Recipes</h2>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image=" "
              title={this.props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {RecipeList}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Details
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default SavedRecipes;
