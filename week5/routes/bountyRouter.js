const express = require('express');
const bountyRouter = express.Router();
const uuidV4 = require('uuid.v4')

const bounties = [
    {firstName: "Obi-Wan", lastName: "Kenobi", living: true, bountyAmt: 1000, type: "Jedi", _id:uuidV4()},
    {firstName: "Darth", lastName: "Vader", living: true, bountyAmt: 1000, type: "Sith", _id:uuidV4()},
    {firstName: "Adi", lastName: "Gallia", living: false, bountyAmt: 500, type: "Jedi",_id:uuidV4()}
    
]

bountyRouter.get("/", (req,res) =>{
    res.send(bounties)
    })

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id=uuidV4()
    bounties.push(newBounty)
    res.send(newBounty)

})

//delete one
bountyRouter.delete("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(onebounty => onebounty._id === bountyId)
    bounties.splice(bountyIndex,1)
    res.send("Successfully deleted bounty!")

})

//update one
bountyRouter.put("/:bountyId", (req, res) => {

    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(onebounty => onebounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

module.exports = bountyRouter