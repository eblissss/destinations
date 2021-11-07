import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(18, 40, 112, 1)",
  },
  image: {
    marginLeft: "15px",
    marginRight: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
