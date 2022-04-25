import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const EmployeeDetails = () => {
  const [eData,setData] = useState([]);

  const {id} = useParams()
  
  useEffect(() =>{
     axios.get("http://localhost:8080/employee/").then((res) =>{
       const Data = res.data.filter((el) => {
         return el.id == id
       })
       setData(Data);
      })
  },[])
  
  return (
    <>
    {eData.map((dt) =>
    <div className="user_details" key={dt.id} >
      <br />
      <img className="user_image" src={dt.image}/>
      <br />
      <h4 className="user_name">{dt.employee_name}</h4>
      <br />
      <span className="user_salary">${dt.salary}</span>
      <br />
      <span className="tasks">
        
        {dt.tasks.map((e,i) => {
          <li className="task" key={i}>{e}</li>
        })
          }
      </span>
      <br />
      Status: <b className="status">{dt.status}</b>
      <br />
      Title: <b className="title">{dt.title}</b>
      <br />
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      <br />
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
    )}
    </>
  );
};
