import { Request, Response } from "express";
import SubjectModel from "../../model/Subject"
import { subject_input_values_schema, subject_input_values_type } from "./SubjectTypes";

class Subject {
    /* ----------------
------CRUD---------
---------------- */
    async create(req: Request, res: Response) {
        // Check
        const input_data: subject_input_values_type = req.body;
        const hasErrorSchema = subject_input_values_schema.safeParse(input_data);
        if (!hasErrorSchema.success) {
            return res.status(500).json({ message: hasErrorSchema.error.errors });
        };
        // Creation
        const response: any = await SubjectModel.create(input_data);
        if (response.error) {
            return res.status(500).json(response.error);
        }
        return res.status(201).json(response);
    }

    async read(req: Request, res: Response) {
        const response: any = await SubjectModel.read(req.params.id);
        if (response.error) {
            return res.status(404).json(response.error);
        }
        return res.status(200).json(response);
    }

    async readAll(req: Request, res: Response) {
        const response: any = await SubjectModel.readAll()
        if (response.error) {
            return res.status(500).json({ message: response.error });
        }
        return res.status(200).json({
            message: "Success",
            data: response
        })
    }

    async update(req: Request, res: Response) {
        // Check
        const input_data: subject_input_values_type = req.body;
        const hasErrorSchema = subject_input_values_schema.safeParse(input_data);
        if (!hasErrorSchema.success) {
            return res.status(500).json({ message: hasErrorSchema.error.errors });
        };
        // Changes
        const response: any = await SubjectModel.update(req.params.id, input_data)
        if (response.error) {
            return res.status(500).json({ message: response.error });
        }
        return res.status(200).json({ message: "Subject updated." });
    }

    async delete(req: Request, res: Response) {
        // Check
        const response: any = await SubjectModel.delete(req.params.id);
        if (response.error) {
            return res.status(500).json({ message: response.error });
        }
        return res.status(200).json({ message: "Subject removed." });
    };
};

export default new Subject();