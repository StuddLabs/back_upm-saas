import { Request, Response } from "express";
import Subject from "../Subject";

class SubjectStatistics {
    // Actions
    async get_subject(req: Request, res: Response) {
        return await Subject.read(req, res)
    }
};

export default new SubjectStatistics();