const express = require("express");
const router = express.Router();

const plans = require("../data/plansData.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({});
});

router.get("/list", function (req, res, next) {
  res.json(plans);
});

router.post("/policy/:id", function (req, res, next) {
  const selectedPolicy = plans.data.find(
    (policy) => policy.policyId === parseInt(req.params.id)
  );

  res.json(selectedPolicy);
});

module.exports = router;
