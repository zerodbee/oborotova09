import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Calc from './models/Calc.js';
import Messages from './models/Messages.js';

const PORT = 5000;
const DB_URL = "mongodb://localhost:27017/";

const app = express();
app.use(express.json());
app.use(cors());



app.post("/messageadd", async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({message: "Введите данные"});
    }
    try {
        const newmessage = new Messages({name, description});
        await newmessage.save();
        return res.status(201).json(newmessage)
    } catch (e) {

    }
});


app.get("/messagelist", async (req, res) => {
    try {
    const msglist = await Messages.find();
    res.status(200).json(msglist)
    } catch(e) {
        console.error(e);
    }
});




async function StartApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('server started'));
    } catch {

    }
}

StartApp();