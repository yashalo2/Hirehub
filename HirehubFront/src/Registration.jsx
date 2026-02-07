import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import Logo from "./assets/blackLogo.png";

function Registration() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const Register = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        console.log(formData);
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
      <form ref={formRef} onSubmit={Register}>
        <h1>Sign-Up</h1>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
}

export default Registration;
