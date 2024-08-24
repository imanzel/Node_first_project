const express = require('express')
const app = express()
require("./model/index")
require('dotenv').config()

app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')
const { blogs } = require('./model/index')
// app.get('/',(req,res)=>{
//     // res.render("home.ejs")
//     const data= {
//         name : "Anjel Bhatta",
//         age : 20,
//         location : 'Kathmandu'
//     }
//     res.render("home.ejs", {
//         haha : data
//     })
// })

// app.get('/about',(req,res)=>{
//     res.send("This is about page")
// })
app.get("/create",(req,res)=>{
    res.render("create")
})
app.post('/create',async (req,res)=>{
    // const title = req.body.title 
    // const subtitle = req.body.subtitle 
    // const description = req.body.description
    const {title,subtitle,description} = req.body 
   await blogs.create({
        title : title,
        subtitle : subtitle, 
        description : description
    })
    res.send("Blog added successfully")

})

app.use(express.static('public/css/'))
app.listen(3000,()=>{
    console.log("Project suru vo hai ta aaba node js ko")
})
//1.embassy architecture:
//view= front end UI ko code views ma rkhne 
// front end bata ako data lai lagera controller ma rakhne i.e main kura haru hya rakhne 
// database ko model folder ma rakhne
//2.MVCR(model view controller router) 
//
//3.MVT (jango ko lagi ho)