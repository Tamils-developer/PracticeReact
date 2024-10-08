import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';



const LoginComp = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = () => {
        if (userName === "" || password === "") {
              setError("Please fill both fields");
            console.log("vali.......")
            
        }
        else {
            
           navigate("/fetch");
        }
    }
    

                console.log(userName, password);

    
    return (
      <div className="App">
        <label>UserName:</label>
        <input type="name"  onChange={(e)=>setUserName(e.target.value)}/>
        <label>Password:</label>

        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={submit}>Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
}

export default LoginComp