import express, { Application } from "express";
import Server from "./index";
import config from "./config/config";

const app: Application = express();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server: Server = new Server(app);
const port = config.port;
app
  .listen(port, "0.0.0.0", function () {
    console.log(`Server is running on port ${port}.`)
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log(err)
    } else {
      console.log(err);
    }
  });
