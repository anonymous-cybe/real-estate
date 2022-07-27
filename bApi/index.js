import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()
const app = express()
// const mongoDBurl = "mongodb://127.0.0.1:27017/bApi"
const mongoDBurl = "mongodb+srv://SIFU:Paperbag20@sifu.cllqv8v.mongodb.net/?retryWrites=true&w=majority"

app.get("/", (req, res) => {
    res.send("hello first api")
})

mongoose.connect(mongoDBurl)
    .then(result => console.log("MongoDB connected"))
    .catch(err => console.log(err))

app.listen(8000, () => {
    console.log('connected to backend');
})