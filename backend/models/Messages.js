import { Schema, model } from 'mongoose';

const Messages = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

export default model('Messages', Messages);