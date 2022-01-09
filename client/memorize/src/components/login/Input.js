import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = (props) => {
  const {
    name,
    label,
    half,
    handleChange,
    autoFocus,
    type,
    handleShowPassword,
  } = props;
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        onChange={handleChange}
        autoFocus={autoFocus}
        type={type}
        fullWidth
        InputProps={
          name === "password" ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }:null
        }
      />
    </Grid>
  );
};

export default Input;
