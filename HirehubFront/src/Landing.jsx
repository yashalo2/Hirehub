import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
import logo from "./assets/blackLogo.png";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className={style.landingContainer}>
      <div className={style.container}>
        {" "}
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>{" "}
        <div className={style.description}>
          {" "}
          Connecting talent with opportunity. Discover jobs, build your profile,
          and take the next step in your career journey.{" "}
        </div>{" "}
        <div className={style.buttons}>
          {" "}
          <button
            className={style.btnPrimary}
            onClick={() => navigate("register")}
          >
            Get Started
          </button>{" "}
          <button
            className={style.btnSecondary}
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
