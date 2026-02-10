import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./About.module.css";
import logo from "./assets/noneBlackLoo.png";
import { Base_URL } from "./config.js";
function About() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${Base_URL}/api/users/home`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.learnContainer}>
        {" "}
        <header className={style.learnHeader}>
          {" "}
          <h1>About Hirehub</h1>{" "}
        </header>{" "}
        <section className={style.learnContent}>
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
        <footer className={style.learnFooter}>
          {" "}
          <button className={style.learnBtn} onClick={() => navigate("/")}>
            Back to Home
          </button>{" "}
        </footer>{" "}
      </div>
    </>
  );
}
export default About;
