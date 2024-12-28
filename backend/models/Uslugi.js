import { Schema, model } from 'mongoose';

const Uslugi = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

export default model('Uslugi', Uslugi);