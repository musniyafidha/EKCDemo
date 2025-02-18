const express=require("express")
const app=express()
app.get("/",(req,res)=>
{
    res.send("<h1>welcome To Ecommerce Website</h1>")
})
//http://localhost:4500/search?name=redmi
app.get("/search",(req,res)=>
{
    let prodname=req.query.name
    res.send(`<h1>Details of the product with name ${prodname}</h1>`)
})
app.listen(4500,()=>console.log("Express server is running on 4500"))