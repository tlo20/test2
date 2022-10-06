const express = require("express")
const path = require("path")
const app = express()
const data = require("./data_prep")

let port = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send(`
    <h2>Decalartion</h2>
    <p>I acknowlege the College's academic intergirty policy - and my own integrity - remain in effect
    whether my work is done remotely or onsite. Any test or assignment is an act of trust between me and my instructor, and especially with my classmates
    ...even when no one is watching. I declare I will not break that trust.</p>
    <p>Name: LO TSZ KIT</p>
    <p>Student Number: 160067211</p>
    <a href="/CPA">Click to visit CPA students</a><br/>
    <a href="/highGPA">Click to see who has the highest GPA</a>
    `)
})

app.get("/CPA",(req,res)=>{
    res.type('json')
    data.cpa().then(result=>{
        res.send(result)
    },err=>{
        res.send(err)
    } )
})

app.get("/highGPA",(req,res)=>{
    res.type('json')
    data.highGPA().then(result=>{
        res.send(result)
    },err=>{
        res.send(err)
    })

})

app.use((req, res, next) => {
    res.status(404).send("404 Error! Unable to find the page.")
  })

data.prep().then(result=>{

    app.listen(port,()=>{
        console.log(`Express http server listening on ${port}`)
    })
},err=>{
    console.log("Unable to start up server", err)
})