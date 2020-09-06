import React from "react";
import profile from "../../fakeData";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

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

export default function EchoCard({ prop }) {
  let history = useHistory();

  function handleClick() {
    history.push(`/posts/${prop.id}`);
  }

  const classes = useStyles();

  return (
    <div>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <CardContent>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs>
              <Avatar
                src={profile[prop.userId - 1].img}
                className={classes.avatarImg}
              />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h5" component="h2" className={classes.posUp}>
                <Box color="text.secondary">{prop.title}</Box>
              </Typography>
              <Typography className={classes.posBtm} color="textSecondary">
                {profile[prop.userId - 1].email}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            component="p"
            className={classes.posUp}
            color="textSecondary"
          >
            {prop.body}
            <br />
          </Typography>
          <Box color="info.main" className={classes.posUp}>
            5 comments
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleClick}>
            See More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
