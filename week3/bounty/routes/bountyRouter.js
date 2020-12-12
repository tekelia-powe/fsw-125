const express = require('express');
const bountyRouter = express.Router();
const uuidV4 = require('uuid.v4')

const bounty = [
    {firstName: "Obi-Wan", lastName: "Kenobi", living: true, bountyAmt: 1000, type: "Jedi", _id:uuidV4()},
    {firstName: "Darth", lastName: "Vader", living: true, bountyAmt: 1000, type: "Sith", _id:uuidV4()},
    {firstName: "Adi", lastName: "Gallia", living: false, bountyAmt: 500, type: "Jedi",_id:uuidV4()}
    
]

bountyRouter.get("/", (req,res) =>{
    res.send(bounty)
    })

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id=uuidV4()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)

})



module.exports = bountyRouter