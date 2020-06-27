const express = require("express");
const router = express.Router();

const userData = require("../data/userData.json");

/* GET users listing. */
router.post("/:id", (req, res, next) => {
  const user = userData.data.find(
    (user) => user.userId === parseInt(req.params.id)
  );

  res.json(user);
});

router.post("/:id/policy", (req, res, next) => {
  const user = userData.data.find(
    (user) => user.userId === parseInt(req.params.id)
  );

  res.json(user.policy);
});

router.post("/:id/schedule", (req, res, next) => {
  const user = userData.data.find(
    (user) => user.userId === parseInt(req.params.id)
  );

  res.json(user.policy.policySchedule);
});

router.post("/:id/history", (req, res, next) => {
  const user = userData.data.find(
    (user) => user.userId === parseInt(req.params.id)
  );

  res.json(user.policy.policyHistory);
});

module.exports = router;
