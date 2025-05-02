import { useState } from "react"
// import { Link} from "react-router-dom"
export default function Login(){
    
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const changeEmail=(event)=>{
        setEmail(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
        
    return (
        <>
                  Email <input type="text" value={email} onChange={changeEmail}/><br></br>
                  Password <input value={password} onChange={changePassword}/> 
        </>
    )
}