import React, {useState} from 'react'

export default function AddSearchForm(props) {
    
    const initInputs = {searchInput: props.searchInput ||"", type: props.type || ""}
    const [input, setInput] = useState(initInputs)


    function handleChange(e){
        const {name, value} = e.target
        console.log(value)
        setInput(prevInput => ({...prevInput, [name]: value}))
        
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(input.search_input)
         console.log(input.search_input)
         console.log("Searched by Last Name")
         setInput(initInputs)
          
     
    }
  return (
   <>
         
<form onSubmit={handleSubmit}>

    Search by Last Name: 

<input type="text" name="search_input" defaultValue={input.searchInput} onChange={handleChange} placeholder="Search" required/>
<button onClick={props.searchBounty}>Search</button>
</form>
</>
  )
}
