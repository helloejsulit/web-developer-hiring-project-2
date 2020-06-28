const express = require("express");
const router = express.Router();

router.post("/:id", function (req, res, next) {
  //   const selectedPolicy = plans.data.find(
  //     (policy) => policy.policyId === parseInt(req.params.id)
  //   );
  //   res.json(selectedPolicy);
});

module.exports = router;
