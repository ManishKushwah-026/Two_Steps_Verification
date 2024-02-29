import { useState } from "react";
import { useNavigate } from 'react-router-dom'
// import axios from "axios"
import "./Personal.css";

function PersonalDetails() {

  const naviagte = useNavigate();

  const [data, setData] = useState({
    name: "",
    age: "",
    sex: "",
    mobile: "",
    govtIssueId: "",
    govtIdType: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(data);

  const validation = () => {
    const errors = {};

    if (data.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
      alert("Name must be at least 3 characters long");
    }
    
    if (parseInt(data.age) <= 0 || isNaN(parseInt(data.age))) {
      errors.age = "Age must be a positive number";
      alert("Age must be a positive number");
    }
    
    if (!data.mobile.match(/^[6-9]\d{9}$/)) {
      errors.mobile = "Mobile number must be valid for India";
      alert("Mobile number must be valid for India");
    }
    
    if (data.govtIdType === "Aadhar" && (data.govtIssueId.length !== 12 || data.govtIssueId.match(/^[01]/))) {
      errors.govtIssueId = "Aadhar card number must be 12 digits and not start with 0 or 1";
      alert("Aadhar card number must be 12 digits and not start with 0 or 1");
    }

    return errors;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const errors = validation();
    if(Object.keys(errors).length === 0){
      naviagte("/addressDetails", {state: {data:data}});
    }
  };
  return (
    <div className="personal">
      <h1>Personal Details</h1>
      <form onSubmit={submitHandler}>
        
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={changeHandler}
          required
        />
        {/* <label htmlFor="lastName">Last Name</label> */}
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Enter Age in year"
          value={data.age}
          onChange={changeHandler}
          required
        />
        
        <select value={data.sex} onChange={changeHandler} name="sex" required>
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter Mobile"
          value={data.mobile}
          onChange={changeHandler}
          required
        />

        <select value={data.govtIdType} onChange={changeHandler} name="govtIdType" required> 
          <option value="">ID Type</option>
          <option value="Aadhar">Aadhar</option>
          <option value="Pan">pan</option>
        </select>

        <input
          type="text"
          id="govtIssueId"
          name="govtIssueId"
          placeholder="Enter ID"
          value={data.message}
          onChange={changeHandler}
          required
        />
        <button style={{color:"black"}} type="submit">Next</button>
      </form>
    </div>
  );
}

export default PersonalDetails;
