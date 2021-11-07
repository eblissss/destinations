import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost, starPost } from "../../../actions/posts";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [showMore, setShowMore] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          size="small"
          style={{ color: "white" }}
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
          }}
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
        <Menu
          anchorEl={anchorEl}
          id="simple-menu"
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              setCurrentId(post._id);
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              dispatch(deletePost(post._id));
            }}
          >
            Delete
            <DeleteOutlineIcon fontSize="small" />
          </MenuItem>
        </Menu>
      </div>
      <div className={classes.overlayCreator}>
        <Typography variant="caption">
          <em>{post.creator}</em>
        </Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {showMore || post.message.length < 256
            ? post.message
            : `${post.message.substring(0, 240)}...`}
          {"\n"}
          {post.message.length > 256 ? (
            <>
              <br></br>
              <Button
                size="small"
                className="show"
                color="primary"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Hide" : "Show More"}
              </Button>
            </>
          ) : (
            <></>
          )}
        </Typography>
      </CardContent>

      <CardActions className={classes.star}>
        <Button
          size="small"
          style={{ color: "white" }}
          onClick={() => dispatch(starPost(post._id))}
        >
          {`${post.starCount}`}
          {post.starCount < 1 ? (
            <StarBorderIcon fontSize="small" />
          ) : (
            <StarIcon fontSize="small" />
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
