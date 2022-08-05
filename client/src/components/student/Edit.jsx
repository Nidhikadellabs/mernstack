import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";
// import { deepPurple, green } from '@material-ui/core/colors';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//import { User } from "../../../../../models/user";
//import { Navigate, useParams } from "react-router-dom";
// const useStyles = makeStyles({
//  headingColor: {
//   backgroundColor: deepPurple[400],
//   color: "white"
//  },
//  addStuColor: {
//   backgroundColor: green[400],
//   color: "white"
//  },

// });

const Edit = () => {
  //  const classes = useStyles();
  const id = useParams().id;
  console.log(id);
  const Navigate = useNavigate();
  
  const [student, setStudent] = useState({
    firstName: "",
    email: "",
  });
  // let firstName,value;
  const onTextFieldChange =(e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]:value});
    // console.log(name, value);
  }
  useEffect(() => {
    const getStudent = async () => {
      return await axios
        .get(`http://localhost:8080/api/users/${id}`)
        .then((res) => res.data)
        .then((data) => setStudent(data.product));
    };

    getStudent();
  }, [id]);


  // const onTextFieldChange =(e)=>{
  //   // e.preventDefault();
  //   //     updateRequest().then((data) => console.log(data));
        
  //       console.log(e.target.value)
  //     };
    
    
    
      // const updateRequest = async () => {
      //   await axios.put(`http://localhost:8080/api/users/${id}`, {
      //       firstName: String(student.firstName),
      //       email: String(student.email)
      //       // price: Number(inputs.price),
      //       // mrpPrice: Number(inputs.mrpPrice),
      //     })
    
      //     .then((res) => res.data);
    
      // };

      // const updateRequest = async () => {
      //   const res = await axios
      //     .put(`http://localhost:8080/api/users/${id}`, {
      //       firstName: student.firstName,
      //       email: student.email,
      //     })
      //     .catch((err) => console.log(err));
        
      //   const data =  res.data;

      //   return data;
      //   }
//   function onTextFieldChange(e) {
//     setStudent({
//       ...student,
//       [e.target.name]: e.target.value,
//     });
//   }

  async function onFormSubmit(e) {
    console.log("hiii");
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/users/${id}`,{
      firstName: student.firstName,
         email: student.email,
    })
      Navigate.push("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
     
  }
  function handleClick() {
    Navigate(-1);
  }
  return (
    <>
      <Box textAlign="center" mb={2} p={1} sx={{ background: "darkblue" }}>
        <Typography variant="h2">Update List</Typography>
      </Box>
      <Container>
        <Grid container justify="center" spacing={4}>
          <Grid item md={12} xs={12}>
            <Box textAlign="center" p={2} sx={{ background: "green" }} mb={2}>
              <Typography variant="h4">Edit Student</Typography>
            </Box>
            <form   onClick={(e) => onFormSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="id"
                    name="id"
                    variant="outlined"
                    required
                    fullWidth
                    id="id"
                    label="ID"
                    autoFocus
                    value={student._id}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="firstName"
                   name="firstName" 
                   variant="outlined"
                   required 
                   fullWidth
                    id="firstName"
                   label="Name"
                    value={student.firstName}
                    onChange={ onTextFieldChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="email"
                    variant="outlined"
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    value={student.email}
                    onChange={onTextFieldChange}
                  />
                </Grid>
              </Grid>
              <Box m={3} px={24}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  //onChange={updateRequest}
                >
                  Update
                </Button>
              </Box>
            </form>
            <Box m={3} textAlign="center">
              <Button variant="contained" color="primary" onClick={handleClick}>
                Back to Home
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Edit;
