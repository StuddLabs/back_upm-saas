import { model, Schema } from 'mongoose';

// MongoDB 
const SubjectSchema = new Schema({
    title: { type: String, required: true },
    prefix: { type: String },
    percent: { type: Number },
    amount: { type: Number },
    act_done: { type: Number },
    act_alert: { type: Number },
    act_todo: { type: Number },
    act_finished: { type: Number },
    act_total: { type: Number },
    avg_moodle: { type: Number },
    avg_tests: { type: Number },
    avg_total: { type: Number },
})
const mongoModel = model("subject", SubjectSchema);

class SubjectMongoModel {
    // CRUD
    async getAll() {
        try {
            return await mongoModel.find();
        } catch (error: any) {
            return {
                error: error.message
            }
        }
    }
}

export default new SubjectMongoModel();