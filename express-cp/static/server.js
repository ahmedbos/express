const express = require("express")
const app = express()


const authMiddleware =(req,res,next)=>{
    const now= new Date()
    const day =now.detDay()
    const hour =now.getHours()
    const auth=false
    if(day>0 && day<6 && hour>=9 && hour<=17) {auth=true}
    else {auth=false}
    if (auth){
        next()
    }
    else {res.send ("sorry out of work times")}
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'static/home.html')
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'static/services.html')
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+'static/contact.html')
})

app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+'static/style.css')
})

app.use(express.static(__dirname+"/static"))

const port= 5000
app.listen(port , ()=> console.log("listening on port :",port))
 