import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/blackLogo.png";
import home from "../assets/home.svg";
import message from "../assets/message.svg";
import logout from "../assets/signout.svg";
import job from "../assets/suitcase.svg";
import { Base_URL } from "../config";
import style from "./JobSeeker.module.css";
function JobSeekerPage() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const currentPage = localStorage.getItem("currentPage") || "home";
  const LogOut = () => {
    fetch(`${Base_URL}/api/users/logout`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "Logout Successfully") {
          navigate("/login");
        } else {
          alert("!Error occurred");
        }
      });
  };
  useEffect(() => {
    fetch(`${Base_URL}/api/users/home`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "No user logged in") {
          navigate("/");
        }
        const username = data.replace("@gmail.com", "");
        setUser(username);
      });
  }, []);
  return (
    <>
      <div className={style.topBar}>
        <div className={style.navigator}>
          <nav>
            <Link
              className={` ${style.Link} ${currentPage == "home" ? style.current : style.Link}`}
              to="home"
              onClick={() => localStorage.setItem("currentPage", "home")}
            >
              Home
            </Link>
            <Link
              className={` ${style.Link} ${currentPage == "jobs" ? style.current : style.Link}`}
              to="home"
              onClick={() => localStorage.setItem("currentPage", "jobs")}
            >
              Jobs
            </Link>
            <Link
              className={` ${style.Link} ${currentPage == "application" ? style.current : style.Link}`}
              to="application"
              onClick={() => localStorage.setItem("currentPage", "application")}
            >
              Applications
            </Link>
            <Link
              className={` ${style.Link} ${currentPage == "message" ? style.current : style.Link}`}
              to="messages"
              onClick={() => localStorage.setItem("currentPage", "message")}
            >
              Messages
            </Link>
            <Link
              className={` ${style.Link} ${currentPage == "profile" ? style.current : style.Link}`}
              to="profile"
              onClick={() => localStorage.setItem("currentPage", "profile")}
            >
              Profile
            </Link>
          </nav>
        </div>
        <div className={style.profile}>
          <div
            className={style.info}
            onClick={() => setShowMenu(!showMenu)}
          ></div>
          <div className={style.img}></div>
        </div>
        <div className={style.label}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={style.menu}>
        <div
          onClick={() => {
            (navigate("home"), localStorage.setItem("currentPage", "job"));
          }}
          className={currentPage == "job" ? style.currentOnPhone : ""}
        >
          <img src={job} alt="" />
        </div>
        <div
          onClick={() => {
            (navigate("application"),
              localStorage.setItem("currentPage", "application"));
          }}
          className={currentPage == "application" ? style.currentOnPhone : ""}
        >
          Applied
        </div>
        <div
          onClick={() => {
            (navigate("home"), localStorage.setItem("currentPage", "home"));
          }}
          className={currentPage == "home" ? style.currentOnPhone : ""}
        >
          <img src={home} alt="" />
        </div>
        <div
          onClick={() => {
            (navigate("messages"),
              localStorage.setItem("currentPage", "message"));
          }}
          className={currentPage == "message" ? style.currentOnPhone : ""}
        >
          <img src={message} alt="" />
        </div>
        <div
          onClick={() => {
            (navigate("profile"),
              localStorage.setItem("currentPage", "profile"));
          }}
          className={currentPage == "profile" ? style.currentOnPhone : ""}
        >
          Profile
        </div>
      </div>
      {showMenu && (
        <div className={style.menuContainer}>
          <strong>{user}</strong>
          <button onClick={LogOut}>
            <img src={logout} alt="" />
          </button>
        </div>
      )}
      <main className={style.content}>
        <Outlet />
      </main>
    </>
  );
}
export default JobSeekerPage;
