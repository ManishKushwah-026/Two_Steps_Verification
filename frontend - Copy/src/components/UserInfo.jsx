import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination, TextField } from '@mui/material';

const UserInfo = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get("http://localhost:4000/user/getAllUsers");
                console.log(response.data.data);
                setData(response.data.data);
                // console.log(typeof data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    // console.log(data[0])
  return (
    <div style={{marginTop:"40px"}}>
         <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>GovtIdType</TableCell>
                        <TableCell>GovtIssueId</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Pincode</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.sex}</TableCell>
                            <TableCell>{row.mobile}</TableCell>
                            <TableCell>{row.govtIdType}</TableCell>
                            <TableCell>{row.govtIssueId}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.state}</TableCell>
                            <TableCell>{row.city}</TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell>{row.pincode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    </div>
  )
}

export default UserInfo