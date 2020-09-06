import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import EchoCard from "../EchoCard/EchoCard";
import Grid from "@material-ui/core/Grid";
import PostAddIcon from "@material-ui/icons/PostAdd";

const Body = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container direction="column" justify="center" alignItems="center">
          <PostAddIcon
            color="primary"
            style={{ fontSize: 50, marginTop: 15 }}
          />
        </Grid>
        {posts.map((post) => (
          <EchoCard key={post.id} prop={post} />
        ))}
      </Container>
    </div>
  );
};

export default Body;
