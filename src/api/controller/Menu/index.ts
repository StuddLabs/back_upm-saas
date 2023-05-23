import { Request, Response } from "express";
import SubjectModel from "../../model/Subject"

class Menu {
    // Actions
    async _init_(req: Request, res: Response) {
        // get subjects and check
        const subs: any = await SubjectModel.readAll();
        if (subs.error) {
            res.status(500).json({ message: subs.error })
        }
        // act
        return res.status(200).json({
            username: "Victor",
            avatar: "linkhere.com.br",
            subs_info: subs.map((el: any) => {
                return {
                    id: el.id,
                    title: el.title
                }
            })
        });
    }
};

export default new Menu();