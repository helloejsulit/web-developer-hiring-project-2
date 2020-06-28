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

router.post("/plan", function (req, res, next) {
  const selectedPlan = plans.data.find(
    (plan) => plan.planId === parseInt(req.body.id)
  );
  res.json(selectedPlan);
});

module.exports = router;
