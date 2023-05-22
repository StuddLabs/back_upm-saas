import { Router } from "express";
const routes = Router();

import SubjectController from "./api/controller/Subject"
routes.route("/subject")
    .get(SubjectController.getAll)

export default routes;