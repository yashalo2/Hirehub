import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Registration />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
