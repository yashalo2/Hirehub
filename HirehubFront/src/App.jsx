import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About.jsx";
import Home from "./JobSeeker/Home.jsx";
import JobSeekerPage from "./JobSeeker/JobSeekerPage.jsx";
import LandingPage from "./Landing.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Registration />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="seeker" element={<JobSeekerPage />}>
          <Route path="home" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
