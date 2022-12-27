const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/public"));

// routes
app.use(require("./routes"));

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

// finally, let's start our server...
const server = app.listen(process.env.PORT || 9000, function () {
  console.log("Listening on port " + server.address().port);
});
