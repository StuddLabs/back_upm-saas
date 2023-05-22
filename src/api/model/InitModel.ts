import { model, Schema } from 'mongoose';

// MongoDB 
const authSchema = new Schema({
    name: { type: String, required: true },
})
const mongoModel = model("Auth", authSchema);

class InitMongoModel {

}

export default new InitMongoModel();