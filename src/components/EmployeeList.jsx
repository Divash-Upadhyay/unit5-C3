import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
 const [employee,setEmployee] = useState([]);


 useEffect(()=>{
  getEmployee();
},[])
  async function getEmployee(){
    await axios.get("http://localhost:8080/employee").then((res)=>{
      console.log(res.data)   
      setEmployee(res.data)   
    })
  }
  console.log("employee",employee)
  console.log(employee.password)

  return (
    <div className="list_container" style={{
      display:"grid",
      gridTemplateColumns: "repeat(4, auto)",
      border: "1px solid black",
      gap: "20px",
    }}>
      {/* On clicking this card anywhere, user goes to user details */}
      {employee.map((el)=>{
        return <Link to={`/employees/${el.id}`}>
         <div className="employee_card" >
        <img className="employee_image" src={el.image} />
        <br />
          <span className="employee_name">{el.employee_name}</span>
          <br/>
          <span className="employee_title">{el.title}</span>
      </div>
      </Link>
      })}
      
    </div>
  );
};
