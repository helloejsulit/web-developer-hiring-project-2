const express = require("express");
const router = express.Router();

const policies = require("../data/policiesData.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({});
});

router.post("/list", function (req, res, next) {
  res.json(policies);
});

router.post("/policy/:id", function (req, res, next) {
  const selectedPolicy = policies.data.find(
    (policy) => policy.policyId === parseInt(req.params.id)
  );

  res.json(selectedPolicy);
});

module.exports = router;
