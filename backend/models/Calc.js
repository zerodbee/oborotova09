import { Schema, model } from 'mongoose';

const Calc = new Schema({
    firstvalue: {
        type: String,
        required: true,
    },
    secondvalue: {
        type: String,
        required: true,
    }
});

export default model('Calc', Calc);