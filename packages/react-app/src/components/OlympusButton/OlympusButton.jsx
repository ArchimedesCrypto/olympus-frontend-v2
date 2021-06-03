import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { styles } from "./styles.scss";

const useStyles = makeStyles(theme => ({
  ohmButton: {
    minHeight: "44px",
    lineHeight: "38px",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Square, cursive",
    color: "black",
    backgroundColor: "white",
    borderRadius: "10px",
    textTransform: "capitalize",
    border: "2px solid $secondary",
    transform: "translateY(0px)",
    minWidth: "140px",
    transition: "box-shadow 200ms, transform 200ms linear",
  },
}));

export default function OlympusButton(props) {
  const classes = useStyles();
  return (
    <div className={styles}>
      <Button href={props.href} className={classes.ohmButton}>
        {props.ButtonText}
      </Button>
    </div>
  );
}
