import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import Logo from "./assets/blackLogo.png";
import { Base_URL } from "./config.js";
function Login() {
  const navigate = useNavigate();
  const form = useRef(null);
  const [color, setColor] = useState({
    color: "green",
  });
  const [message, setMessage] = useState("");
  const Login = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    fetch(`${Base_URL}/api/users/login`, {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "User Logged Successfully") {
          setColor({ color: "green" });
          setMessage(data);
          navigate("/seeker");
          localStorage.setItem("currentPage", "home") || "home";
        } else {
          setColor({ color: "red" });
          setMessage(data);
        }
      });
  };
  return (
    <div className={style.Container}>
      <div className={style.header} onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
      </div>
      <div className={style.actionBtns}>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>

      <form ref={form} onSubmit={Login}>
        <h1>Sign-In</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          name="email"
          onChange={() => setMessage("")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={() => setMessage("")}
        />
        <a href="#"> forgot password</a>
        <p style={color}>{message}</p>
        <button>Sign-In</button>
      </form>
    </div>
  );
}
export default Login;
