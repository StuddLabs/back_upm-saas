import { model, Schema } from 'mongoose';

// MongoDB 
const ActivitySchema = new Schema({
    title: { type: String },
    point: { type: Number },
    mode: { type: String },
    type: { type: String },
    sendDate: { type: String },
    endDate: { type: String },
    status: { type: String },
    link: { type: String },
    _subject_id: { type: String }
})
const mongoModel = model("activity", ActivitySchema);

class ActivityMongoModel {
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
                error: "Activity not found"
            }
        }
    }

    async readAll() {
        try {
            const data = await mongoModel.find()
            if (data.length < 1) {
                return {
                    error: "No Activities"
                }
            }
            return data
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
                error: "Activity not found"
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

    // Actions
    async findBySubId(sub_id: string) {
        try {
            const data = await mongoModel.find({ _subject_id: sub_id });
            if (data.length < 1) {
                return {
                    error: "Activities not found"
                }
            }
            return data;
        } catch (error) {
            return {
                error: "Activities not found"
            }
        }
    }
}

export default new ActivityMongoModel();