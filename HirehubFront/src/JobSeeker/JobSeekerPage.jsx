import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/noneBlackLoo.png";
import { Base_URL } from "../config";
import style from "./JobSeeker.module.css";
function JobSeekerPage() {
  const [user, setUser] = useState();
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
            <Link className={style.Link} to="home">
              Applications
            </Link>
            <Link className={style.Link} to="home">
              Messages
            </Link>
            <Link className={style.Link} to="home">
              Profile
            </Link>
          </nav>
        </div>
        <div className={style.profile}>
          <strong>{user}</strong>
          <div className={style.img}></div>
        </div>
        <div className={style.label}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={style.menu}>
        <div></div>
        <div>3</div>
        <div>3</div>
        <div>33</div>
        <div>3</div>
      </div>

      <main className={style.content}>
        <Outlet />
      </main>
    </>
  );
}
export default JobSeekerPage;
