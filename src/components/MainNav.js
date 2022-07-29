import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#0077c0",
    zIndex: 100,
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useNavigate();


  useEffect(() => {
    if (value === 0) {
      history("/");
    } else if (value === 1) {
      history("/movies");
    } else if (value === 2) {
      history("/series");
    } else if (value === 3) {
      history("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white", fontWeight: "bold" , backgroundColor: "#2c3968", borderRadius:"30px"}}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" , fontWeight: "bold" , backgroundColor: "#2c3968", borderRadius:"30px"}}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" , fontWeight: "bold" , backgroundColor: "#2c3968", borderRadius:"30px"}}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" , fontWeight: "bold" , backgroundColor: "#2c3968", borderRadius:"30px"}}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
