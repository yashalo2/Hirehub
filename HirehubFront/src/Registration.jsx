import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import Logo from "./assets/blackLogo.png";

function Registration() {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [color, setColor] = useState({
    color: "transparent",
  });
  const navigate = useNavigate();
  const Register = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setColor({ color: "red" });
      setMessage("Password don't match !");
      return;
    }

    const formData = new FormData(formRef.current);
    fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "User Registered Successfully") {
          setColor({ color: "green" });
          setMessage(data);
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
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <form ref={formRef} onSubmit={Register} onChange={() => setMessage("")}>
        <h1>Sign-Up</h1>
        <label htmlFor="email">Email</label>
        <input type="text" required id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label className={style.label}>
          <input type="radio" required name="role" value="jobSeeker" />
          <span> Job Seeker</span>
        </label>
        <label className={style.label}>
          <input type="radio" required name="role" value="employer" />
          <span>Employer</span>
        </label>
        <p style={color}>{message}</p>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
}

export default Registration;
