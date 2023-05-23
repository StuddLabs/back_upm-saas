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

import SubjectTable from "./api/controller/SubjectTable";
routes.route("/subjectTable/:id?")
    .get(SubjectTable._init_)
routes.route("/subjectTable/act/:id")
    .get(SubjectTable.get_activity)
    .patch(SubjectTable.update_activity)

import Menu from "./api/controller/Menu";
routes.route("/menu")
    .get(Menu._init_)

import SubjectStatistics from "./api/controller/SubjectStatistics";
routes.route("/subjectStatistics/:id")
    .get(SubjectStatistics.get_subject)
    .patch(SubjectStatistics.update_subject)

export default routes;