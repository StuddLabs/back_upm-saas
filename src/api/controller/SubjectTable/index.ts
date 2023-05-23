import { Request, Response, json } from "express";
import Activity from "../Activity";
import SubjectModel from "../../model/Subject"
import ActivityModel from "../../model/Activity";
import { up_act_input_values_schema, up_act_input_values_type } from "./SubjectTableTypes";

class SubjectTable {
    // Actions
    async _init_(req: Request, res: Response) {
        // get subject
        const data: any = await SubjectModel.readAll();
        const { id, title, prefix } = data[0]
        // // get activities
        const acts: any = await ActivityModel.findBySubId(req.params.id ? req.params.id : id)
        if (acts.error) {
            return res.status(404).json(acts.error);
        }
        return res.status(200).json({
            id,
            title,
            prefix,
            acts: acts.map((el: any) => {
                return {
                    id: el.id,
                    title: el.title,
                    point: el.point,
                    status: el.status,
                    endDate: el.endDate
                }
            })
        });
    }

    async get_activity(req: Request, res: Response) {
        return await Activity.read(req, res)
    }

    async update_activity(req: Request, res: Response) {
        // Check
        const input_data: up_act_input_values_type = req.body;
        const hasErrorSchema = up_act_input_values_schema.safeParse(input_data);
        if (!hasErrorSchema.success) {
            return res.status(500).json({ message: hasErrorSchema.error.errors });
        };
        // UP
        let act: any = await ActivityModel.read(req.params.id)
        for (const [key, value] of Object.entries(hasErrorSchema.data)) {
            act[key] = value
        }
        req.body = act;
        return await Activity.update(req, res);
    }
};

export default new SubjectTable();