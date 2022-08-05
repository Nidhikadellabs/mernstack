import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Tooltip, IconButton } from "@mui/material"
// import { orange } from '@material-ui/core/colors';
import React from 'react';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// const useStyles = makeStyles({
//  stuListColor: {
//   backgroundColor: orange[400],
//   color: "white"
//  },
//  tableHeadCell: {
//   color: "white",
//   fontWeight: "bold",
//   fontSize: 16
//  },
// })

const List = () => {
    //  const classes = useStyles();
    const [students, setStudents] = React.useState([]);

    const getUsers = async () => {
        const users = await axios.get('http://localhost:8080/api/users');
        setStudents(users.data.users);
    
    }

    React.useEffect(() => {
        getUsers();
    }, [students]);



    //  useEffect(() => {
    //   async function getAllStudent() {
    //    try {
    //     const students = await axios.get("http://localhost:3333/students")
    //     // console.log(students.data);
    //     setStudents(students.data);
    //    } catch (error) {
    //     console.log("Something is Wrong");
    //    }
    //   }
    //   getAllStudent();
    //  }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/users/${id}`)
       .then((res) => res.data);

    };



    return (
        <>
            <Box textAlign="center" mb={2} p={1} sx={{ background: 'green' }} >
                <Typography variant="h4">Student List</Typography>
            </Box>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#616161" }} spacing={2}>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            students.map((student, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell align="center">{i + 1}</TableCell>
                                        <TableCell align="center">{student.firstName}</TableCell>
                                        <TableCell align="center">{student.email}</TableCell>
                                        <TableCell align="center">
                                            <Tooltip title="View">
                                                <IconButton><Link to={`/view/${student._id}`}><VisibilityIcon color="primary" /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit">
                                                <IconButton><Link to={`/edit/${student._id}`}><EditIcon /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton onClick={() => handleDelete(student._id)}><DeleteIcon color="secondary" /></IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </>)
}

export default List;






