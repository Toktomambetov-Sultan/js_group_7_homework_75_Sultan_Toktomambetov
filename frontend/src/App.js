import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { grey } from "@material-ui/core/colors";
import React from "react";

const useStyle = makeStyles((theme) => ({
  app: {
    background: grey[100],
    height: "100vh",
    paddingTop: theme.spacing(3),
  },
  appInner: {
    padding: theme.spacing(0, 4),
  },
}));

function App() {
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <Container maxWidth="md">
        <Paper className={classes.appInner}>
          <form validate="true">
            <Grid container direction="column">
              <Grid item>
                <TextField
                  label="Decoded message"
                  placeholder="Please, type something."
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item container direction="row" spacing={10}>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="password"
                    placeholder="Please, type something."
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <IconButton type="submit" size="medium" color="primary">
                    <ArrowDownwardIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton type="submit" size="medium" color="primary">
                    <ArrowUpwardIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  label="Encoded message"
                  placeholder="Please, type something."
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
