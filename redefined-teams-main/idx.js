require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./b_end/routes");

app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);

// const io = (module.exports.io = require("socket.io")(server));
// This is missing in the video.
const io = (module.exports.io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
}));
const socketManager = require("./b_end/socketMgr");
io.on("connection", socketManager);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
