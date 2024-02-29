import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import axios from "axios"
import "./Address.css";

function AddressDetails() {

  const location = useLocation();
  const personal = location.state?.data;
  console.log("personal data: ",personal)

  const [data, setData] = useState({
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: ""
  });

  useEffect(() => {

  })

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(data);

  const validation = () => {

  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/user/createUser",
        {...data, ...personal}
      );

      console.log("Data", response.data);

      setData({
        address: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="personal">
      <h1>Address Details</h1>
      <form onSubmit={submitHandler}>
        
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter Address"
          value={data.address}
          onChange={changeHandler}
          
        />
        {/* <label htmlFor="lastName">Last Name</label> */}
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Enter State"
          value={data.state}
          onChange={changeHandler}
          
        />

       <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter City"
          value={data.city}
          onChange={changeHandler}
          
        />

       <input
          type="text"
          id="country"
          name="country"
          placeholder="Enter Country"
          value={data.country}
          onChange={changeHandler}
          
        />

        <input
          type="text"
          id="pincode"
          name="pincode"
          placeholder="Enter Pincode"
          value={data.pincode}
          onChange={changeHandler}
          
        />
        
        <button style={{ color: "black" }} type="submit">submit</button>
      </form>
    </div>
  );
}

export default AddressDetails;
