const express = require("express");
const cors = require("cors");
const vigenereRouter = require("./routers/VigenereRouter");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/vigenere", vigenereRouter);
app.listen(8000, () => {
  console.log("Server started on 8000 port. ");
});
