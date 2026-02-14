import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/noneBlackLoo.png";
import { Base_URL } from "../config";
import style from "./JobSeeker.module.css";
function JobSeekerPage() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const LogOut = () => {
    fetch(`${Base_URL}/api/users/logout`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "Logged Out Successfully") {
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
        const username = data.replace("@gmail.com", "");
        setUser(username);
      });
  }, []);
  return (
    <>
      <div className={style.topBar}>
        <div className={style.navigator}>
          <nav>
            <Link className={`${style.current} ${style.Link}`} to="home">
              Home
            </Link>
            <Link className={style.Link} to="home">
              Jobs
            </Link>
            <Link className={style.Link} to="application">
              Applications
            </Link>
            <Link className={style.Link} to="messages">
              Messages
            </Link>
            <Link className={style.Link} to="profile">
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
        <div onClick={() => navigate("home")}>Home</div>
        <div onClick={() => navigate("home")}>Jobs</div>
        <div onClick={() => navigate("application")}>Applications</div>
        <div onClick={() => navigate("messages")}>Message</div>
        <div onClick={() => navigate("profile")}>Profile</div>
      </div>
      {showMenu && (
        <div className={style.menuContainer}>
          <strong>{user}</strong>
          <button onClick={LogOut}>Log-Out</button>
        </div>
      )}
      <main className={style.content}>
        <Outlet />
      </main>
    </>
  );
}
export default JobSeekerPage;
