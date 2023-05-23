import { Request, Response } from "express";
import { up_sub_input_values_schema, up_sub_input_values_type } from "./types";
import Subject from "../Subject";
import SubjectModel from "../../model/Subject"

class SubjectStatistics {
    // Actions
    async get_subject(req: Request, res: Response) {
        return await Subject.read(req, res)
    }
    async update_subject(req: Request, res: Response) {
        // Check
        const input_data: up_sub_input_values_type = req.body;
        const hasErrorSchema = up_sub_input_values_schema.safeParse(input_data);
        if (!hasErrorSchema.success) {
            return res.status(500).json({ message: hasErrorSchema.error.errors });
        };
        // UP
        const { moodle, participation, testI, testII } = input_data;
        let sub: any = await SubjectModel.read(req.params.id);
        const avgMoodle = (moodle * 4) / 10;
        const avgTests = ((testI * 3) / 10) + ((testII * 3) / 10);
        sub["avg_moodle"] = avgMoodle;
        sub["avg_tests"] = avgTests;
        sub["avg_total"] = avgMoodle + avgTests + participation
        req.body = sub;
        return await Subject.update(req, res);
    }
};

export default new SubjectStatistics();