import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import Logo from "./assets/blackLogo.png";
function Login() {
  const navigate = useNavigate();
  return (
    <div className={style.Container}>
      <div className={style.header} onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
      </div>
      <div className={style.actionBtns}>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>

      <form>
        <h1>Sign-In</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <a href="#"> forgot password</a>
        <button>Sign-In</button>
      </form>
    </div>
  );
}
export default Login;
