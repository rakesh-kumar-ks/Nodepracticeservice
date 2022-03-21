const express = require('express')
const app = express()
const port = 3001;
var cors = require('cors');
app.use(cors());
// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
//      if(err) throw err;
      
//      //Write databse Insert/Update/Query code here..
                
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/save",(req,res)=>{
    console.log("called the post function")
    let body=req.body;
    console.log(body);
    res.send()

})

const projectrout=require('./projectdetailsservies/Projects')

app.use("/project",projectrout);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

