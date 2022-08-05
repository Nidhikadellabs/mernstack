import axios from "axios";
import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Grid,
  Toolbar,
  TextField,
} from "@mui/material";
import List from "../student/List";
// import List from "../student/List";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [student, setStudent] = useState({
    firstName: "",
    email: "",
  });
  const [status, setStatus] = useState();
  const [text, setText] = useState();

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
    setText(e.target.value);
  }

  async function onFormSubmit(e) {
    student.firstName ===""||student.email==="" ? 
   alert("textField cannot be blank") :
    axios.post(`http://localhost:8080/api/users/students`, student); 
    e.preventDefault();
    try {
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  if (status) {
    return <Main />;
  }
  return (
    <>
      <Box textAlign="center" mb={2}>
        <Toolbar
          sx={{
            background:
              "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
          }}
        >
          <Typography variant="h4">Register</Typography>
          <Box display="flex" marginLeft="auto">
            <Button
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Box>
      <Grid container justify="center" spacing={4} px={2}>
        <Grid item md={6} xs={10}>
          <Box textAlign="center" p={1} mb={2} sx={{ background: "orange" }}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate justify="center">
            <Grid container spacing={2} marginLeft="150px">
              <Grid item xs={8} px={2}>
            
                <TextField
                  autoComplete="stuname"
                  name="firstName"
                  variant="outlined"
                  required="true"
                  fullWidth
                  id="stuname"
                  label="Name"
                  // value={text}
                  value={student.firstName}
                  onChange={(e) => onTextFieldChange(e)?{}:{} }
                  // onKeyDown={(event) => setText(event.target.value)}
                  // error={text === ""}
                  // helperText={text === "" ? "Empty!" : " "}
                />
              </Grid>
              <Grid item xs={8} px={2}>
                <TextField
                  required="true"
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={student.email}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={2} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "200px" }}
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
