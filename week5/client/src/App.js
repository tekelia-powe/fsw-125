import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import './App.css'
import AddBountyForm from './components/AddBountyForm.js'
import pic1 from './images/bh.PNG'


export default function App(){
    const [bounties,setBounty] = useState([])

    function getBounty(){
        axios.get("/bounty")
        .then(res => setBounty(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty){
        axios.post("/bounty",newBounty)
        .then(res => {
            setBounty(prevBounty => [...prevBounty, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounty/${bountyId}`)
        .then(res => {
            setBounty(prevBounty => prevBounty.filter(bounty=>bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounty/${bountyId}`, updates)
        .then(res => {
            console.log(res.data)
            setBounty(prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            console.log(res.data)
        })
        .catch(err=>console.log(err))
}
    useEffect(() => {
       getBounty()
    },[])
    return(
        <div className="container">
            <div className="img_container">
            <img src={pic1}/>
            The Original Bounty Hunter
            <img src={pic1}/>
            </div>
            <AddBountyForm 
                submit={addBounty} btnText="Add Bounty"
            />
            {
            bounties.map(bounty=> 
                <Bounty
                    {...bounty}
                    key={bounty._id}
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}
                    />)
                    
            }
            
        </div>

    )



}