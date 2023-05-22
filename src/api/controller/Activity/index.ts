import { Request, Response } from "express";
import ActivityModel from "../../model/Activity"
import { activity_input_values_schema, activity_input_values_type } from "./ActivityTypes";

class Activity {
    /* ----------------
   ------CRUD---------
   ---------------- */
    async create(req: Request, res: Response) {
        // Check
        const input_data: activity_input_values_type = req.body;
        const hasErrorSchema = activity_input_values_schema.safeParse(input_data);
        if (!hasErrorSchema.success) {
            return res.status(500).json({ message: hasErrorSchema.error.errors });
        };
        // Creation
        const response: any = await ActivityModel.create(input_data);
        if (response.error) {
            return res.status(500).json(response.error);
        }
        return res.status(201).json(response);
    }

    async read(req: Request, res: Response) {
        const response: any = await ActivityModel.read(req.params.id);
        if (response.error) {
            return res.status(404).json(response.error);
        }
        return res.status(200).json(response);
    }

    async readAll(req: Request, res: Response) {
        const response: any = await ActivityModel.readAll()
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
        const input_data: activity_input_values_type = req.body;
        const hasErrorSchema = activity_input_values_schema.safeParse(input_data);
        if (!hasErrorSchema.success) {
            return res.status(500).json({ message: hasErrorSchema.error.errors });
        };
        // Changes
        const response: any = await ActivityModel.update(req.params.id, input_data)
        if (response.error) {
            return res.status(500).json({ message: response.error });
        }
        return res.status(200).json({ message: "Activity updated." });
    }

    async delete(req: Request, res: Response) {
        // Check
        const response: any = await ActivityModel.delete(req.params.id);
        if (response.error) {
            return res.status(500).json({ message: response.error });
        }
        return res.status(200).json({ message: "Activity removed." });
    };
};

export default new Activity();