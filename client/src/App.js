import { Route, Routes, BrowserRouter,Navigate } from "react-router-dom";
import Main from "./components/Main/index.jsx";
import Signup from "./components/Signup/index.jsx";
import Login from "./components/Login/index.jsx";
import View from "./components/student/View.jsx";
import Edit from "./components/student/Edit.jsx";
// import Edit from "./components/student/pages/Edit.jsx";
// import Main from "./components/Main/index.jsx";
// import { Main } from "./components/Main/index.jsx";
 


function App() {
	const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
      <Routes>
      {user && <Route path="/" exact element={<Main />}/>}
      <Route path="/signup"  element={<Signup />} />
		 	<Route path="/login"  element={<Login />} />
       <Route path="/" element={<Navigate replace to="/login" />} />
       <Route path="/view/:id" element={<View />}/>
       <Route path="/edit/:id" element={<Edit/>}/>

{/* <Route path="/" exact element={<Main />}/> */}
        
      </Routes>
    </BrowserRouter>
	);
}

export default App;