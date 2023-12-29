require('dotenv').config()
const connectToMongo=require("./db");
const express=require("express")
var cors=require('cors')
connectToMongo()

const app=express()


app.use(cors(
  {
      origin: ["https://deploy-mern-frontend.vercel.app"],
      methods: ["POST", "GET"],
      credentials: true
  }
));
//  app.get("/",(req,res)=>{
//      res.send("hello farman");
//   })

app.use(express.json())
//available routes
 app.use('/api/auth',require('./routes/auth'))
 app.use('/api/notes',require('./routes/notes'))

app.listen(process.env.PORT,()=>{
  console.log(`myNotebook backend listening at http://localhost:${process.env.PORT}`);
})
