const express =require("express");
const app = express();


app.get("/user",(req,res)=>{
    res.send({firstName:"Anand", lastName:"Patel"})
})

app.post("/user",(req,res)=>{
    //logic of saving data to data base
    res.send("Data saved to database successfully")
})


app.delete("/user",(req,res)=>{
res.send("data deleted successfully")
})


app.use("/user",(req,res)=>{
    res.send("Hello from the server")
})

// app.use("/hello",(req,res)=>{
//     res.send("hello hello hello")
// })


// app.use("/",(req,res)=>{
//     res.send("Hello from the home")
// })

app.listen(3000 , ()=>{
    console.log("Server is runing on port 3000...")
});