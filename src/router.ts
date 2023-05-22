import { Router } from "express";
const routes = Router();

import InitController from "./api/controller/init"
routes.route("/init")
    .get(InitController.init)

export default routes;