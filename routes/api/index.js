const router = require("express").Router();

router.use("/v1/openai", require("./openai"));
router.use("/v1/performance", require("./performance"));

module.exports = router;
