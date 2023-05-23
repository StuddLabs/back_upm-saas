import { Request, Response } from "express";
import SubjectModel from "../../model/Subject"
import ActivityModel from "../../model/Activity";
import Activity from "../Activity";

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
            title,
            prefix,
            acts: acts.map((el: any) => {
                return {
                    id: el._id,
                    title: el.title,
                    point: el.point,
                    status: el.status,
                    endDate: el.endDate
                }
            })
        });
    }

    async get_activity(req: Request, res: Response) {
        await Activity.read(req, res)
    }
};

export default new SubjectTable();