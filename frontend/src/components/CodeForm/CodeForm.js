import { CircularProgress, Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import React from "react";
import { useSelector } from "react-redux";

const CodeForm = ({ onChange, onSubmit, onClick }) => {
  const data = useSelector((state) => state.data);
  const action = useSelector((state) => state.action);
  return (
    <form validate="true" onChange={onChange} onSubmit={onSubmit}>
      <Grid container direction="column">
        <Grid item>
          <TextField
            label="Decoded message"
            placeholder={action === "decode" ? "Keep wait." : "Please, type something."}
            fullWidth
            multiline
            rows={4}
            name="deCode"
            value={action === "decode" ? "" : data.deCode}
            margin="normal"
            variant="outlined"
            disabled={action === "decode"}
            InputProps={
              action === "decode"
                ? {
                    startAdornment: (
                      <InputAdornment position="start">
                        <CircularProgress />
                      </InputAdornment>
                    ),
                  }
                : null
            }
          />
        </Grid>
        <Grid item container direction="row" alignItems="center" justify="space-around">
          <Grid item xs={12} md={4}>
            <TextField
              label="password"
              name="password"
              value={data.password}
              placeholder="Please, type something."
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6} container direction="row" justify="space-between" alignItems="center">
            <IconButton name="encode" onClick={onClick} type="submit" size="medium" color="primary">
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
            <IconButton name="decode" onClick={onClick} type="submit" size="medium" color="primary">
              <ArrowUpwardIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="Encoded message"
            name="enCode"
            placeholder={action === "encode" ? "Keep wait." : "Please, type something."}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            disabled={action === "encode"}
            value={action === "encode" ? "" : data.enCode}
            InputProps={
              action === "encode"
                ? {
                    startAdornment: (
                      <InputAdornment position="start">
                        <CircularProgress />
                      </InputAdornment>
                    ),
                  }
                : null
            }
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default CodeForm;
