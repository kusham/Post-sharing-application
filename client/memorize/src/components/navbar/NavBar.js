import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Grid,
  Button,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "./NavBarStyle";
import memories from "../../images/memories.png";
import { LOGOUT } from "../../constants/actionTypes";

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });

    history.push("/");
    setUser(null);
  };
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Grid container>
          <Grid item md={user ? 7 : 10}>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              variant="h2"
            >
              Memories{" "}
              <img
                className={classes.image}
                src={memories}
                alt="icon"
                height="60"
              />
            </Typography>
          </Grid>
          <Toolbar>
            <Grid item md={user ? 5 : 2}>
              {user?.result ? (
                <div className={classes.profile}>
                  <Avatar
                    className={classes.purple}
                    alt={user?.result.name}
                    src={user?.result.imageUrl}
                  >
                    {user?.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">
                    {user?.result.name}
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.logout}
                    color="secondary"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  align="center"
                >
                  login
                </Button>
              )}
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
};

export default NavBar;
