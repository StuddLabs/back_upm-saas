import { Router } from "express";
const routes = Router();

import SubjectController from "./api/controller/Subject"
// CRUD
routes.route("/subject")
    .post(SubjectController.create)
    .get(SubjectController.readAll)
routes.route("/subject/:id")
    .get(SubjectController.read)
    .patch(SubjectController.update)
    .delete(SubjectController.delete);

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