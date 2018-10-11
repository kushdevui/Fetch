import express from 'express';
import cors from 'cors';
import path from 'path';

var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname , "../dist")));

app.listen(8080 , ()=>{console.log("Express Server listening on port 8080!!")});