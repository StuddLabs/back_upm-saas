import { Request, Response } from "express";

class Controller {
    async init(req: Request, res: Response) {
        return res.status(200).json({
            message: "Success"
        })
    }
};

export default new Controller();