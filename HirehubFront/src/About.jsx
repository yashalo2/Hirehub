import { useNavigate } from "react-router-dom";
import "./About.css";
import logo from "./assets/noneBlackLoo.png";
function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="learn-container">
        {" "}
        <header className="learn-header">
          {" "}
          <h1>About Hirehub</h1>{" "}
        </header>{" "}
        <section className="learn-content">
          {" "}
          <p>
            {" "}
            Hirehub is designed to connect job seekers with opportunities that
            match their skills and aspirations. Our platform emphasizes
            simplicity, modern design, and powerful backend integration to
            ensure a seamless experience.{" "}
          </p>{" "}
          <p>
            {" "}
            Whether you’re building your profile, exploring new roles, or
            networking with employers, Hirehub provides the tools you need to
            succeed.{" "}
          </p>{" "}
        </section>{" "}
        <footer className="learn-footer">
          {" "}
          <button className="learn-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>{" "}
        </footer>{" "}
      </div>
    </>
  );
}
export default About;
