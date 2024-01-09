import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import "./App.css";
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
import { Page404 } from "./components/pages/404Page";
import { TarinatTyokirja } from "./components/pages/Products/TarinatTyokirja";
import { TvtOpetuksenTaitoPaketti } from "./components/pages/Products/TvtOpetuksenTaitopaketti";
import { ApinmajaExercises } from "./components/pages/Exercises/ApinmajaExercises";
import { HasanStudioExercises } from "./components/pages/Exercises/HasanStudioExercises";
import { TweetyExercises } from "./components/pages/Exercises/TweetyExercises";
import { DogenBoxiExercises } from "./components/pages/Exercises/DogenBoxiExercises";
import { KursorinUllakkoExercises } from "./components/pages/Exercises/KursorinUllakkoExercises";
import { SirynÄlytaloExercise } from "./components/pages/Exercises/SirynÄlytaloExercises";
import { ApinmajaMap } from "./components/pages/Maps/ApinmajaMap";
import { DogenboxiMap } from "./components/pages/Maps/DogenboxiMap";
import { LaamanExercises } from "./components/pages/Exercises/LaamanExercises";
import { MiukuMaukuExercises } from "./components/pages/Exercises/MiukuMaukuExercises";
import { OhjelmointiExercises } from "./components/pages/Exercises/OhjelmointiExercises";
import { HasanStudioMap } from "./components/pages/Maps/HasanStudioMap";
import { TweetynviestiseinäMap } from "./components/pages/Maps/TweetynViestiseinäMap";
import { KursorinUllakkoMap } from "./components/pages/Maps/KursorinUllakkoMap";
import { LaamanAitausMap } from "./components/pages/Maps/LaamanAitausMap";
import { SirynAlytaloMap } from "./components/pages/Maps/SirynAlytaloMap";
import { OhjelmointiMap } from "./components/pages/Maps/ohjelmointiMap";
import { MiukumaukuMap } from "./components/pages/Maps/MiukumaukuMap";
import { EmpatiaPolku } from "./components/pages/empatiapolku";
import { EmpatiaPolkuExercises } from "./components/pages/Exercises/EmpatiaPolku";
import { TrolliKommentoimassaData } from "./components/data/trolliKommentoimassaData";

function App() {
  const { user } = useAuthContext();
  const showNavbar = window.location.pathname !== "/404";
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
              path="/empatiapolku/trolli-kommentoimassa"
              element={<TrolliKommentoimassaData />}
            />
            <Route
              path="/tuotteet/TarinatTyokirja"
              element={<TarinatTyokirja />}
            />
            <Route
              path="/tehtävät/apinmaja/:index"
              element={<ApinmajaExercises />}
            />
            <Route
              path="/tehtävät/häsänstudio/:index"
              element={<HasanStudioExercises />}
            />
            <Route
              path="/tehtävät/TweetynViestiseinä/:index"
              element={<TweetyExercises />}
            />
            <Route
              path="/tehtävät/dogenboxi/:index"
              element={<DogenBoxiExercises />}
            />
            <Route
              path="/tehtävät/kursorinullakko/:index"
              element={<KursorinUllakkoExercises />}
            />
            <Route
              path="/tehtävät/sirynalytalo/:index"
              element={<SirynÄlytaloExercise />}
            />
            <Route
              path="/tehtävät/laamanaitaus/:index"
              element={<LaamanExercises />}
            />
            <Route
              path="/tehtävät/miukumauku/:index"
              element={<MiukuMaukuExercises />}
            />
            <Route
              path="/tehtävät/ohjelmointi/:index"
              element={<OhjelmointiExercises />}
            />
            <Route
              path="/tehtävät/tuotteet/TVT-opetuksen-taitopaketti"
              element={<TvtOpetuksenTaitoPaketti />}
            />
            <Route path="/kartat/apinmaja" element={<ApinmajaMap />} />
            <Route path="/kartat/dogenboxi" element={<DogenboxiMap />} />
            <Route path="/kartat/hasanstudio" element={<HasanStudioMap />} />
            <Route path="/kartat/sirynalytalo" element={<SirynAlytaloMap />} />
            <Route path="/kartat/ohjelmointi" element={<OhjelmointiMap />} />
            <Route
              path="/kartat/tweetynviestiseinä"
              element={<TweetynviestiseinäMap />}
            />
            <Route path="/kartat/miukumauku" element={<MiukumaukuMap />} />
            <Route
              path="/kartat/kursorinullakko"
              element={<KursorinUllakkoMap />}
            />
            <Route path="/kartat/laamanaitaus" element={<LaamanAitausMap />} />
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
            <Route path="/empatiapolku" element={<EmpatiaPolku />}></Route>
            <Route
              path="/tehtävät/empatiapolku/:index"
              element={<EmpatiaPolkuExercises />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
