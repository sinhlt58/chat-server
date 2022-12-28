const router = require("express").Router();

router.post("/test", async (req, res, next) => {
  const a = 1 + 2;

  res.send(1 + 2);
});

module.exports = router;
