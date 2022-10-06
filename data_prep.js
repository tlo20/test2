const fs = require("fs")

let students = []

function prep(){
    return new Promise( 
        (resolve,reject)=>{
    
        fs.readFile('./students.json',(err,data)=>{
            if (err)reject("Unable to read file")
            students = JSON.parse(data);
            resolve()
        })
    })
}

function cpa(){
    return  new Promise( (resolve,reject)=> {
        if (students.length==0){reject("no results returned")}
        else{
            resolve(students)
        }
    }) 
}

function highGPA(){
    return  new Promise( (resolve,reject)=> {
        if (students.length==0){reject("No Data Found!")}
       let highestGPA = 0
       let highestStudentIndex
       for (let i=0;i<students.length;i++){
        if (students[i].gpa > highestGPA){
            highestGPA = students[i].gpa
            highestStudentIndex = i
        }
       }
       resolve(students[highestStudentIndex])
    }) 
}


module.exports = {
   prep,
   cpa,
   highGPA
}