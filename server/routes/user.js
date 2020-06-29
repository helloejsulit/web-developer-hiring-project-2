const express = require("express");
const router = express.Router();

const userData = require("../data/userData.json");

/* GET users listing. */
router.post("/getUserById", (req, res, next) => {
  const user = userData.data.find(
    (user) => user.userId === parseInt(req.body.id)
  );

  res.json(user);
});

module.exports = router;
