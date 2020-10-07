const express = require("express");
const Vigenere = require("caesar-salad").Vigenere;

const router = express.Router();

router.use((req, res, next) => {
  if (
    typeof req.body.message === "string" &&
    typeof req.body.password === "string"
  ) {
    if (req.body.password === "") res.status(400).send("Password is empty.");
    else if (req.body.password.indexOf(" ") + 1)
      res.status(400).send("Password has space. Password mustn`t has space.");
    else next();
  } else {
    res.status(400).send("Message or password is undefined.");
  }
});

router.post("/encode", (req, res) => {
  res.send({
    message: Vigenere.Cipher(req.body.password).crypt(req.body.message),
  });
});
router.post("/decode", (req, res) => {
  res.send({
    message: Vigenere.Decipher(req.body.password).crypt(req.body.message),
  });
});
module.exports = router;
