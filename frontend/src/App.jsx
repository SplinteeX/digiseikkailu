import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Teacherinfo from "./components/pages/teacher-info";
import { Login } from "./components/pages/login";
import { TeacherLogin } from "./components/pages/teacher-login";
import { StudentLogin } from "./components/pages/student-login";
import { Register } from "./components/pages/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tietoa-opettajalle" element={<Teacherinfo />} />
            <Route path="/kirjaudu" element={<Login />}></Route>
            <Route path="/rekisteröidy" element={<Register />} />
            <Route path="/kirjaudu/opettaja" element={<TeacherLogin />} />
            <Route path="/kirjaudu/oppilas" element={<StudentLogin />} />{" "}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
