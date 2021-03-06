const fs = require("fs");
const path = require("path");
const express = require('express');
const logger = require('morgan');
const data = fs.readFileSync("./public/data/menu.json", "UTF-8");
const mongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017/learning_mongo";
//process.env.MONGODB_URI || "mongodb://parsley:3*!Bic9ch@ds259577.mlab.com:59577/heroku_cjjcjzkz"
const PORT = process.env.PORT || 8000;
const cors = require("cors");

const app = express();

const staticFiles = express.static(path.join(__dirname, './client/build'));

console.log("path file ", path.join(__dirname, './client/build'));
app.use(staticFiles);

app.set('etag', false)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());
app.use(cors());
app.options('/postData', cors()) 
app.use(logger('dev'));

//get the status of the post request
let postStatus;
//variable for database connection
let db;

//initialize database connection
async function connectDB(){
    if(!db) db = await mongoClient.connect(URL, {w:1, poolSize:5, useNewUrlParser:true})
    return {
        cursor: db.db("learning_mongo"),
        db:db
    }
}

app.get("*", (req, res)=>{ 
    res.sendFile(path.join(__dirname, './client/build'));
})

app.get("/getData", cors(), async (req, res)=>{
    const { cursor } = await connectDB();
    let result;
    try{
        result = await cursor.collection("menu").find({}).toArray();
        return res.json({success:true, data:result})
    }catch(e){
        return res.json({success:false, error:e})
    }
  })

app.post("/postData", cors(), async (req, res)=>{
    postStatus = res.statusCode;
    const { cursor } = await connectDB();
    let data = [...req.body];
    let _id = new Date().toString();
    try{
        let result = await cursor.collection("purchase").insertOne({_id:_id, data:[...data]})
        return res.json({success:true, data:result})
    }catch(e){
        return res.json({success:false, error:e})
    }    
})

app.get("/getPurchases", cors(), async (req, res)=>{  
    const { cursor } = await connectDB();
    let result;
    try{
        if(postStatus === 200){
            result = await cursor.collection("purchase")
                    .find({}).sort({_id:-1}).limit(1).toArray();
            return await res.json({success:true, data:result});
        }
    }catch(e){
        return res.json({success:false, error:e})
    } 
})

app.listen(PORT);