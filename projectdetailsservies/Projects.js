const express = require('express');
const router = express.Router();

router.get("/all",(req,res)=>{

    console.log('calling the get prject api');

    let  details=[
        {
            heading:"Reporting APP",
            project_about:`This project was a mobile application used in health care the
            main purpose of this project is to provide service for health care`
        }
        ,{
        
            heading:"Transistion Adopter",
            project_about:`This project was used for sending data from mainframe systems 
            now  lates abrams systems using spring boot application and apache kafka and jms q system`
        },
        {
            heading:"EPIC",
            project_about:`This project was based on C# .net core and also MQSQL to build a system to automate the 
            process`
        }
    ];
    res.status(200);
    res.json({"data":details});
})
module.exports=router;

