import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@mui/material"
// import { orange } from '@material-ui/core/colors';
 import { useParams, useNavigate } from "react-router-dom";
 import { useState, useEffect } from "react";
 import axios from "axios";
import { Container } from "@mui/system";
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
// });
const View = () => {
  //const Edit = () => {
    //  const classes = useStyles();
    const id = useParams().id;
    console.log(id)
     const Navigate = useNavigate();
    const [student, setStudent] = useState({
        stuname: "",
        email: ""
    });
   
    useEffect(() => {
        const getStudent = async () => {
            return await axios.get(`http://localhost:8080/api/users/${id}`)
                .then((res) => res.data)
                .then((data) => setStudent(data.product));

        };

        getStudent();
    }, [id]);
//     function onTextFieldChange (e) {
//       setStudent({
//           ...student,
//           [e.target.name]: e.target.value
//       })
//   }
//   async function onFormSubmit (e) {
//     e.preventDefault()
//     try {
//         await axios.put(`http://localhost:3333/students/${id}`, student)
//         Navigate.push("/")
//     } catch (error) {
//         console.log("Something is Wrong");
//     }
// }
function handleClick() {
    Navigate(-1);
}






//  const classes = useStyles();
//  const { id } = useParams();
//  const [student, setStudent] = useState([]);
//  const history = useHistory();
//  useEffect(() => {
//   async function getStudent() {
//    try {
//     const student = await axios.get(`http://localhost:3333/students/${id}`)
//     // console.log(student.data);
//     setStudent(student.data);
//    } catch (error) {
//     console.log("Something is Wrong");
//    }
//   }
//   getStudent();
//  }, [id])

//  function handleClick() {
//   history.push("/")
//  }
//  return (
//   <>
//    <Box textAlign="center" p={2} className={classes.stuListColor}>
//     <Typography variant="h4">Student Detail</Typography>
//    </Box>
//    <TableContainer component={Paper}>
//     <Table>
//      <TableHead>
//       <TableRow style={{ backgroundColor: "#616161" }}>
//        <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
//        <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
//        <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
//       </TableRow>
//      </TableHead>
//      <TableBody>
//       <TableRow>
//        <TableCell align="center">{student.id}</TableCell>
//        <TableCell align="center">{student.stuname}</TableCell>
//        <TableCell align="center">{student.email}</TableCell>
//       </TableRow>
//      </TableBody>
//     </Table>
//    </TableContainer>
//    <Box m={3} textAlign="center">
//     <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
//    </Box>
//   </>
//  )
// }

// export default View


return (
    <>
    <Container>
     <Box textAlign="center" p={2} style={{ backgroundColor: "orange" }} xs={2}>
      <Typography variant="h4">Student Detail</Typography>
     </Box>
     <TableContainer component={Paper}>
      <Table>
       <TableHead>
        <TableRow style={{ backgroundColor: "#616161" }}  >
         <TableCell align="center" >ID</TableCell>
         <TableCell align="center" >Name</TableCell>
         <TableCell align="center" >Email</TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        <TableRow>
         <TableCell align="center">{student._id}</TableCell>
         <TableCell align="center">{student.firstName}</TableCell>
         <TableCell align="center">{student.email}</TableCell>
        </TableRow>
       </TableBody>
      </Table>
     </TableContainer>
     <Box m={3} textAlign="center">
      <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
     </Box>
     </Container>
    </>
   )
  }
  
  export default View



//   import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper,Tooltip,IconButton } from "@mui/material"
// // import { orange } from '@material-ui/core/colors';
// import VisibilityIcon from '@mui/icons-material/Visibility'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import { useState, useEffect } from "react";
// // const useStyles = makeStyles({
// //  stuListColor: {
// //   backgroundColor: orange[400],
// //   color: "white"
// //  },
// //  tableHeadCell: {
// //   color: "white",
// //   fontWeight: "bold",
// //   fontSize: 16
// //  },
// // })

// const List = () => {
// //  const classes = useStyles();
// //  const [students, setStudents] = useState([]);

// //  useEffect(() => {
// //   async function getAllStudent() {
// //    try {
// //     const students = await axios.get("http://localhost:3333/students")
// //     // console.log(students.data);
// //     setStudents(students.data);
// //    } catch (error) {
// //     console.log("Something is Wrong");
// //    }
// //   }
// //   getAllStudent();
// //  }, [])

// //  const handleDelete = async id => {
// //   await axios.delete(`http://localhost:3333/students/${id}`);
// //   var newstudent = students.filter((item) => {
// //    // console.log(item);
// //    return item.id !== id;
// //   })
// //   setStudents(newstudent);
// //  }


//  return (
//   <>
//    <Box textAlign="center" p={2}  >
//     <Typography variant="h4">Student List</Typography>
//    </Box>
//    <TableContainer component={Paper}>
//     <Table>
//      <TableHead>
//       <TableRow style={{ backgroundColor: "#616161" }}>
//        <TableCell align="center" >No</TableCell>
//        <TableCell align="center"  >Name</TableCell>
//        <TableCell align="center"  >Email</TableCell>
//        <TableCell align="center"  >Action</TableCell>
//       </TableRow>
//      </TableHead>
//      <TableBody>
//       {/* {
//     //    students.map((student, i) => {
//         return (
//          <TableRow key={i}>
//           <TableCell align="center">{i + 1}</TableCell>
//           <TableCell align="center">{student.stuname}</TableCell>
//           <TableCell align="center">{student.email}</TableCell>
//           <TableCell align="center">
//            <Tooltip title="View">
//             <IconButton><Link to={`/view/${student.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
//            </Tooltip>
//            <Tooltip title="Edit">
//             <IconButton><Link to={`/edit/${student.id}`}><EditIcon /></Link></IconButton>
//            </Tooltip>
//            <Tooltip title="Delete">
//             <IconButton onClick={() => handleDelete(student.id)}><DeleteIcon color="secondary" /></IconButton>
//            </Tooltip>
//           </TableCell>
//          </TableRow>
//         )
//     } */}
//          <TableRow  >
//           <TableCell align="center"> </TableCell>
//           <TableCell align="center"> </TableCell>
//           <TableCell align="center"> </TableCell>
//           <TableCell align="center">
//            <Tooltip title="View">
//             <IconButton> <VisibilityIcon color="primary" /></IconButton>
//            </Tooltip>
//            <Tooltip title="Edit">
//             <IconButton> <EditIcon /></IconButton>
//            </Tooltip>
//            <Tooltip title="Delete">
//             <IconButton  ><DeleteIcon color="secondary" /></IconButton>
//            </Tooltip>
//           </TableCell>
//          </TableRow>

      

//      </TableBody>
//     </Table>
//    </TableContainer>
//   </>
//  )
// }

// export default List







  