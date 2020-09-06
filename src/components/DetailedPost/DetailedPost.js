import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CommentIcon from "@material-ui/icons/Comment";
import CommentContainer from "../CommentContainer/CommentContainer";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 25,
  },
  title: {
    fontSize: 20,
  },
  posBtm: {
    marginTop: 6,
    marginBottom: 12,
  },
  posUp: {
    marginTop: 20,
  },
  avatarImg: {
    marginLeft: 12,
    marginTop: 15,
    width: 70,
    height: 70,
  },
});

const DetailedPost = () => {
  const { postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  const classes = useStyles();

  return (
    <>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ backgroundColor: "lightblue" }}
      >
        <CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <CommentIcon
              color="primary"
              style={{ fontSize: 50, marginTop: 15 }}
            />
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h5" component="h2" className={classes.posUp}>
              <Box color="text.secondary">{post.title}</Box>
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.posUp}
              color="textSecondary"
            >
              {post.body}
              <br />
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={9}>
          <CommentContainer post={post} />
        </Grid>
      </Grid>
    </>
  );
};

export default DetailedPost;
