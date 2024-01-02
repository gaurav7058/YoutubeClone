const express=require("express");
const app=express();
const cors=require("cors");
const path=require("path");
const router=require("./routes/router")
var bodyParser = require('body-parser')
app.use(express.json({limit:"450mb",extended:true}))
app.use(express.urlencoded({limit:"450mb",extended:true}))

const port = process.env.port || 2000;
app.use(cors());
app.use("/uploads",express.static(path.join("uploads")))
app.use(bodyParser.json());

app.use(router);
app.listen(port,()=>{
  console.log(`listing to the ${port} `);
})


