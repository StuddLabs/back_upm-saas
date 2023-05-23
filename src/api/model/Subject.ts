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
    async create(data: any) {
        try {
            return await mongoModel.create(data);
        } catch (error: any) {
            return {
                error: error.message
            }
        }
    }

    async read(id: string) {
        try {
            return await mongoModel.findById(id);
        } catch (error: any) {
            return {
                error: "Subject not found"
            }
        }
    }

    async readAll() {
        try {
            return await mongoModel.find();
        } catch (error: any) {
            return {
                error: error.message
            }
        }
    }

    async update(id: string, data: any) {
        try {
            // check
            const obj: any = await this.read(id)
            if (obj.error) {
                return {
                    error: obj.error
                }
            }
            // Act
            return await mongoModel.updateOne({ _id: id }, data);
        } catch (error: any) {
            return {
                status: 500,
                error: "Subject not found"
            }
        }
    }

    async delete(id: string) {
        try {
            return await mongoModel.deleteOne({ _id: id });
        } catch (error: any) {
            return {
                status: 500,
                error: error.message
            }
        }
    }
}

export default new SubjectMongoModel();