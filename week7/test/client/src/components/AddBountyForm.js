import React, {useState} from 'react'

export default function AddBountyForm(props) {
    
    const initInputs = {firstName: props.firstName ||"",lastName: props.lastName ||"",living: props.living ||"",bountyAmt: props.bountyAmt ||"", type:props.type ||""}
    const [inputs, setInputs] = useState(initInputs)


    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs,props._id)
        setInputs(initInputs)
        if (props.btnText === "Submit Edit") {
          props.editToggle(prevToggle => !prevToggle)
      }
  
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name" required/>
        <input type="text" name="bountyAmt" value={inputs.bountyAmt} onChange={handleChange} placeholder="Bounty Amount" required/><br></br>
        Type: <select name="type" value={inputs.type} onChange={handleChange}>
            <option selected>Type?</option>
            <option value="Sith">Sith</option>
            <option value="Jedi">Jedi</option>
        </select>
        Living: <select name="living" value={inputs.living} onChange={handleChange}>
            <option selected>Still Alive?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <button>{props.btnText}</button>
    </form>

<form onSubmit={handleSubmit}>

Search by: <select name="type" value={inputs.type} onChange={handleChange}>
    <option value="search" selected>Please select an option</option>
    <option value="search_last">Search by Last Name</option>
    <option value="search_bounty">Search by Bounty Amount</option>
    <option value="search_type">Search by Type</option>
    <option value="search_living">Search by Living</option>
</select>

<button>Search</button>
</form>
</>
  )
}
