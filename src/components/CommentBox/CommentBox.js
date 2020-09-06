import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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

const CommentBox = ({ comment }) => {
  const classes = useStyles();
  const uid = Math.round(comment.postId + (comment.id % 10));
  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs>
            <Avatar
              src={`https://randomuser.me/api/portraits/men/${uid}.jpg`}
              className={classes.avatarImg}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5" component="h2" className={classes.posUp}>
              <Box color="text.secondary">{comment.name}</Box>
            </Typography>
            <Typography className={classes.posBtm} color="textSecondary">
              {comment.email}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          component="p"
          className={classes.posUp}
          color="textSecondary"
        >
          {comment.body}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentBox;
