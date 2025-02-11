import { Application } from "express";
import v2Routes from "./v1routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/v1", v2Routes);
  }
}