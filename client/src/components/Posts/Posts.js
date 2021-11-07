import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
//import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  //const classes = useStyles();

  return !posts.length ? (
    <LinearProgress color="primary" />
  ) : (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 750: 1, 950: 2 }}
      width="100%"
    >
      <Masonry gutter="20px">
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} s={24}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Posts;
