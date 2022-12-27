const router = require("express").Router();

router.use("/api", require("./api"));

router.use("/", (req, res, next) => {
  return res.send("Send static index.html later");
});

module.exports = router;
