import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import { Teacherinfo } from "./components/pages/teacher-info";
import { Login } from "./components/pages/login";
import { TeacherLogin } from "./components/pages/teacher-login";
import { StudentLogin } from "./components/pages/student-login";
import { Register } from "./components/pages/register";
import { Profile } from "./components/pages/teacher-profile";
import { AboutUs } from "./components/pages/aboutUs";
import { useAuthContext } from "./components/hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import { ChatBot } from "./components/chatbot";
import { Products } from "./components/pages/Products";
import "./App.css";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <ChatBot />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tietoa-opettajalle" element={<Teacherinfo />} />
            <Route path="/tuotteet" element={<Products />} />
            <Route
              path="/kirjaudu"
              element={!user ? <Login /> : <Navigate to="/profile" />}
            ></Route>
            <Route path="/rekisteröidy" element={<Register />} />
            <Route path="/kirjaudu/opettaja" element={<TeacherLogin />} />
            <Route path="/kirjaudu/oppilas" element={<StudentLogin />} />
            <Route
              path="/profile"
              element={<ProtectedRouter element={<Profile />} />}
            />
            <Route path="/tietoa-meista" element={<AboutUs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
