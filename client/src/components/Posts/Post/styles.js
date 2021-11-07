import { makeStyles } from "@material-ui/core";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  overlayCreator: {
    position: "absolute",
    top: "140px",
    left: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 15px",
  },
  star: {
    padding: "0 16px 8px 16px",
    position: "absolute",
    top: "140px",
    right: "0",
    justifyContent: "space-between",
  },
  show: {
    borderColor: "black",
    padding: "8px",
    margin: "10px",
  },
});
