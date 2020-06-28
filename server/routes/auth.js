const express = require("express");
const router = express.Router();

const userData = require("../data/userData.json");

router.post("/authenticateUser", (req, res, next) => {
  const user = userData.data.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );

  res.json(user);
});

module.exports = router;
