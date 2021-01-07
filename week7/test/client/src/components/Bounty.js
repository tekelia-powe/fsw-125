import React, {useState} from 'react'
import AddBountyForm from './AddBountyForm.js'


export default function Bounty(props){
    const {firstName, lastName, living, type, bountyAmt, _id, deleteBounty, editBounty} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
            <>
            <h1>Name: {firstName} {lastName}</h1>
            <p>Living: {living === true? "yes" : "no"}</p>
            <p>Bounty Amount: $ {bountyAmt}</p>
            <p>Type:  {type}</p>
            <button className="delete-btn" onClick={()=> deleteBounty(_id)}>Delete</button>
            <button className="edit-btn" onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddBountyForm 
                firstName={firstName}
                lastName={lastName}
                living= {living}
                type={type}
                bountyAmt= {bountyAmt}
                _id={_id}
                btnText="Submit Edit"
                submit={editBounty}
                editToggle = {setEditToggle}
                
                 />
                 <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
                 </>
            }
        </div>
    )
}