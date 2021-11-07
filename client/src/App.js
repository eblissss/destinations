import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import red_camera from "./images/red_camera.png";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg" id="mainContainer">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={red_camera} alt="" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">
          Destinations
        </Typography>
        <img className={classes.image} src={red_camera} alt="" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            alignItems="stretch"
            spacing={5}
          >
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
