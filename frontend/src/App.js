import { Container, makeStyles, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeForm from "./components/CodeForm/CodeForm";
import { changeData, codeInit } from "./store/actions";

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
  const dispatch = useDispatch();
  const changeDataHandler = (key, value) => dispatch(changeData(key, value));
  const codeInitHandler = (action, data) => dispatch(codeInit(action, data));
  const state = useSelector((state) => state);
  const onFormChange = (event) => {
    const { name, value } = event.target;
    changeDataHandler(name, value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  const onFormClick = (event) => {
    if (state.data.password) {
      const name = event.currentTarget.name;
      codeInitHandler(name,state.data);
    }
  };
  return (
    <div className={classes.app}>
      <Container maxWidth="md">
        <Paper className={classes.appInner}>
          <CodeForm onChange={onFormChange} onSubmit={onFormSubmit} onClick={onFormClick} />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
