const liveServer = require("live-server");

const params = {
  port: process.env.PORT || 3000,
  host: "0.0.0.0",
  root: "./",
  open: false
};

liveServer.start(params);
