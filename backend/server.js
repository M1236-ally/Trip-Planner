
const express = require("express");
const collection = require("./model");
const collection1=require("./model2");
const collection2 = require("./model4");
const collection4=require("./model6");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors(
  {
    origin:["https://trip-planner-indol.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
))
app.use(express.json({extended:true}))
app.use(express.urlencoded())


app.get('/test',(req,res)=>{

})


app.post('/test',async (req,res)=>{
    const{name,password}=req.body

    try{
          const check=await collection.findOne({name:name,password:password})
          if(check)
          {
            res.json("exist")
          }
          else{
            res.json("not exist")
          }
    }
    catch(e){
        res.json("notexist")
    }
})

app.get('/test2',(req,res)=>{

})

app.post('/test2',async (req,res)=>{
    const{email,password,name}=req.body
      const data={
        name:name,
        email:email,
        password:password
      }
      
      const check=await collection.findOne({name:name,email:email,password:password})
      if(check)
      {
        res.json("exist")
      }
      else{
        res.json("not exist")
        await collection.insertMany([data])
      }
    
})


app.get('/home',async(req,res)=>{
  const r= await collection2.find({})
    res.json(r)
})

app.post('/home',async (req,res)=>{ 
  const{Destination,Days,People,Budget,Date}=req.body
  const data1={
   Destination:Destination,
   Days:Days,
   People:People,
   Budget:Budget,
   Date:Date
  }
     console.log(data1)
     //await collection2.insertMany([data])
  //let r=[]
    // r=await collection2.find({Destination:Destination,
    // Days:Days,
    // People:People,
    // Budget:Budget,
    // Date:Date})
    //  console.log(r)

    let b=[]
    b=await collection4.find({Destination:Destination})
      //console.log(b)
    //let f=b.concat(r)
  //  console.log(f)
     res.json({data:b})
})

app.post('/dest',async(req,res)=>{
  //var data=req.body
     const{selectedOption1,selectedOption2,selectedOption3}=req.body
     const data={
      Region:selectedOption1,
      Mood:selectedOption2,
      Airport:selectedOption3
     }
     

      let a=[]
      a=await collection1.find({Region:selectedOption1})
      console.log(a)
      res.json({data:a})      
   })
 

app.get('/dest', (req,res)=>{

  })



  
// mongoose.connect("mongodb://127.0.0.1:27017/info", {
//   useNewUrlParser: true,
//   useUnifiedTopology:true
// }, ()=>{
//   console.log("connected1")
// })

mongoose.connect("mongodb+srv://tripplan:trip123@cluster0.zaaeatw.mongodb.net/info?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology:true
}, ()=>{
  console.log("connected1")
})

/*mongoose.createConnection("mongodb://127.0.0.1:27017/tripsuggest", {
  useNewUrlParser: true,
  useUnifiedTopology:true
}, ()=>{
  console.log("connected2")
})

mongoose.createConnection("mongodb://127.0.0.1:27017/destfinder",{
  useNewUrlParser: true,
  useUnifiedTopology:true,
  
}, ()=>{
  console.log("connected3")
})
*/


app.get("/",(req,res)=>{
  res.send("My API")
})



app.listen(4000, ()=> {
  console.log("Server is running on Port 4000 ");
})




