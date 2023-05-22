import { Router } from "express";
const routes = Router();

import SubjectController from "./api/controller/Subject"
routes.route("/subject")
    .get(SubjectController.getAll)

import ActivityController from "./api/controller/Activity"
// CRUD
routes.route("/activity")
    .post(ActivityController.create)
    .get(ActivityController.readAll)
routes.route("/activity/:id")
    .get(ActivityController.read)
    .patch(ActivityController.update)
    .delete(ActivityController.delete);

export default routes;