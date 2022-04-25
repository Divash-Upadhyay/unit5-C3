import axios from "axios";
import { useEffect, useState } from "react";

export const Login = () => {
  //  use reqres to log user in.

  const [log,setLogin] =useState({
    "name":"",
    "password":""
  })
console.log(log)
 
  function change(e){
    e.preventDefault();  
    // console.log(login);
  }

  useEffect(()=>{
       axios.get("https://reqres.in/api/login").then((res) =>{
        console.log(res.data.data)
       
      })
    
  },[])

  return (
    <form className="loginform" onSubmit={change}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        value={log}
        onChange={e => setLogin(e.name.value)}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={e => setLogin(e.password.value)}
        />
      
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
