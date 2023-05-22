import { Request, Response } from "express";
import SubjectModel from "../../model/Subject"

class Subject {
    async getAll(req: Request, res: Response) {
        const response: any = SubjectModel.getAll()
        if (response.error) {
            return res.status(500).json({ message: response.error });
        }

        return res.status(200).json({
            message: "Success",
            data: response
        })
    }
};

export default new Subject();