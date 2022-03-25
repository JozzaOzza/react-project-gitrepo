import { useState } from "react";
import {Link} from 'react-router-dom'

const Login = () => {
    
    // (Username,login) text boxes and submit button to take user to home page

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")
    
    return ( 

        <>
        
        <input type="text" placeholder="Enter username" value={username} onChange={(event)  => {setUsername(event.target.value)}}/>
        <br />
        <input type="password" placeholder="Enter password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
        <br />
        <button type='button'> <Link to="/home"> Submit </Link> </button>

        </>

     );
}
 
export default Login;