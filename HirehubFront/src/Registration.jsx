import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import Logo from "./assets/blackLogo.png";
function Registration() {
  const navigate = useNavigate();
  return (
    <div className={style.Container}>
      <div className={style.header} onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
      </div>
      <div className={style.actionBtns}>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <form>
        <h1>Sign-Up</h1>
        <label htmlFor="email">First Name</label>
        <input type="text" id="email" name="FirstName" />
        <label htmlFor="email">Last Name</label>
        <input type="text" id="email" name="ame" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <label htmlFor="password"> Confirm Password</label>
        <input type="password" name="password" />
        <button>Sign-Up</button>
      </form>
    </div>
  );
}
export default Registration;
