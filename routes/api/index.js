const router = require("express").Router();

router.use("/v1/openai", require("./openai"));

module.exports = router;
