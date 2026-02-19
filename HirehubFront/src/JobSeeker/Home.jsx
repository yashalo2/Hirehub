import { useEffect, useState } from "react";
import profile from "../assets/employer.jpg";
import { Base_URL } from "../config.js";
import style from "./Home.module.css";
function Home() {
  const [suggestion, setSuggestion] = useState(true);
  const [suggestionHidden, setSuggestionHidden] = useState(true);
  const [allHidden, setAllHidden] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [companyPost, setCompanyPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const General = () => {
    setSuggestion(true);
    setSuggestionHidden(true);
    setAllHidden(false);
  };
  const Suggest = () => {
    setSuggestion(false);
    setSuggestionHidden(false);
    setAllHidden(true);
  };
  const getCompanyDetail = (employerId) => {
    fetch(`${Base_URL}/api/job/getEmployer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employerId: Number(employerId) }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCompanyPost(data.reverse());
      });
  };
  useEffect(() => {
    fetch(`${Base_URL}/api/users/getJob`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <>
      {!displayInfo && (
        <>
          {!allHidden && (
            <div className={style.toSuggestion} onClick={Suggest}>
              Suggestion
            </div>
          )}
          {!suggestionHidden && (
            <div className={style.toAll} onClick={General}>
              All
            </div>
          )}
        </>
      )}
      <div className={style.container}>
        {!displayInfo && (
          <>
            <div
              className={` ${style.postContainer} ${suggestion ? style.postContainer : style.hide}`}
            >
              {posts.length > 0 ? (
                posts.map((post, index) => {
                  return (
                    <div key={index} className={style.post}>
                      <div
                        className={style.header}
                        onClick={() => {
                          (setDisplayInfo(true),
                            getCompanyDetail(post.employer.employerId));
                        }}
                      >
                        <div className={style.profileContainer}>
                          <div className={style.profile}>
                            <img
                              src={profile}
                              style={{ width: "40px", borderRadius: "50%" }}
                              alt=""
                            />
                          </div>
                          <div className={style.nameAndJobType}>
                            <strong>{post.employer.companyName}</strong>
                            <p>
                              {post.title} - <span> {post.type}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={style.postContent}>
                        <div className={style.jobInfo}>
                          <h5 style={{ color: "#0533ff" }}>
                            # {post.title} # {post.type} # salary {post.salary}{" "}
                            Birr
                          </h5>
                          <p>{post.description}</p>
                          <p
                            style={{
                              position: "relative",
                              left: "calc(60% - 30px)",
                              bottom: "-10px",
                            }}
                          >
                            <span style={{ color: "blue" }}>Posted on </span>
                            <strong> : </strong>
                            {new Date(post.created).toLocaleDateString()}
                          </p>
                        </div>
                        <div className={style.action}>
                          <div className={style.likeContainer}>
                            <div className={style.likeAndNumber}></div>
                          </div>
                          <div className={style.buttonContainer}>
                            <button>Apply Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>No Post Made Yet!</h2>
              )}
            </div>

            <div
              className={`${style.suggested} ${suggestion ? style.suggest : style.suggested}`}
            >
              <h2>suggestion</h2>
              <div className={style.suggestedContainer}>
                <div
                  className={style.post}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.header}>
                    <div className={style.profileContainer}>
                      <div className={style.profile}></div>
                      <div className={style.nameAndJobType}>
                        <strong>Facebook</strong>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.postContent}>
                    <div className={style.jobInfo}>
                      <p>
                        This project, titled “Design and Evaluation of an
                        LLM-Based Afaan Oromo Conversational AI System,”
                        addresses this challenge by focusing on the systematic
                        design of a conversational AI system capable of
                        interacting in Afaan Oromo. The system leverages recent
                        advances in large language models to enable
                        context-aware, text-based conversations and to handle
                        real-world language usage, including mixed Afaan
                      </p>
                    </div>
                    <div className={style.action}>
                      <div className={style.likeContainer}>
                        <div className={style.likeAndNumber}></div>
                      </div>
                      <div className={style.buttonContainer}>
                        <button>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={style.post}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.header}>
                    <div className={style.profileContainer}>
                      <div className={style.profile}></div>
                      <div className={style.nameAndJobType}>
                        <strong>Facebook</strong>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.postContent}>
                    <div className={style.jobInfo}>
                      <p>
                        This project, titled “Design and Evaluation of an
                        LLM-Based Afaan Oromo Conversational AI System,”
                        addresses this challenge by focusing on the systematic
                        design of a conversational AI system capable of
                        interacting in Afaan Oromo. The system leverages recent
                        advances in large language models to enable
                        context-aware, text-based conversations and to handle
                        real-world language usage, including mixed Afaan
                      </p>
                    </div>
                    <div className={style.action}>
                      <div className={style.likeContainer}>
                        <div className={style.likeAndNumber}></div>
                      </div>
                      <div className={style.buttonContainer}>
                        <button>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={style.post}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.header}>
                    <div className={style.profileContainer}>
                      <div className={style.profile}></div>
                      <div className={style.nameAndJobType}>
                        <strong>Facebook</strong>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.postContent}>
                    <div className={style.jobInfo}>
                      <p>
                        This project, titled “Design and Evaluation of an
                        LLM-Based Afaan Oromo Conversational AI System,”
                        addresses this challenge by focusing on the systematic
                        design of a conversational AI system capable of
                        interacting in Afaan Oromo. The system leverages recent
                        advances in large language models to enable
                        context-aware, text-based conversations and to handle
                        real-world language usage, including mixed Afaan
                      </p>
                    </div>
                    <div className={style.action}>
                      <div className={style.likeContainer}>
                        <div className={style.likeAndNumber}></div>
                      </div>
                      <div className={style.buttonContainer}>
                        <button>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={style.post}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.header}>
                    <div className={style.profileContainer}>
                      <div className={style.profile}></div>
                      <div className={style.nameAndJobType}>
                        <strong>Facebook</strong>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.postContent}>
                    <div className={style.jobInfo}>
                      <p>
                        This project, titled “Design and Evaluation of an
                        LLM-Based Afaan Oromo Conversational AI System,”
                        addresses this challenge by focusing on the systematic
                        design of a conversational AI system capable of
                        interacting in Afaan Oromo. The system leverages recent
                        advances in large language models to enable
                        context-aware, text-based conversations and to handle
                        real-world language usage, including mixed Afaan
                      </p>
                    </div>
                    <div className={style.action}>
                      <div className={style.likeContainer}>
                        <div className={style.likeAndNumber}></div>
                      </div>
                      <div className={style.buttonContainer}>
                        <button>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={style.post}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.header}>
                    <div className={style.profileContainer}>
                      <div className={style.profile}></div>
                      <div className={style.nameAndJobType}>
                        <strong>Facebook</strong>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.postContent}>
                    <div className={style.jobInfo}>
                      <p>
                        This project, titled “Design and Evaluation of an
                        LLM-Based Afaan Oromo Conversational AI System,”
                        addresses this challenge by focusing on the systematic
                        design of a conversational AI system capable of
                        interacting in Afaan Oromo. The system leverages recent
                        advances in large language models to enable
                        context-aware, text-based conversations and to handle
                        real-world language usage, including mixed Afaan
                      </p>
                    </div>
                    <div className={style.action}>
                      <div className={style.likeContainer}>
                        <div className={style.likeAndNumber}></div>
                      </div>
                      <div className={style.buttonContainer}>
                        <button>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={style.post}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.header}>
                    <div className={style.profileContainer}>
                      <div className={style.profile}></div>
                      <div className={style.nameAndJobType}>
                        <strong>Facebook</strong>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.postContent}>
                    <div className={style.jobInfo}>
                      <p>
                        This project, titled “Design and Evaluation of an
                        LLM-Based Afaan Oromo Conversational AI System,”
                        addresses this challenge by focusing on the systematic
                        design of a conversational AI system capable of
                        interacting in Afaan Oromo. The system leverages recent
                        advances in large language models to enable
                        context-aware, text-based conversations and to handle
                        real-world language usage, including mixed Afaan
                      </p>
                    </div>
                    <div className={style.action}>
                      <div className={style.likeContainer}>
                        <div className={style.likeAndNumber}></div>
                      </div>
                      <div className={style.buttonContainer}>
                        <button>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {displayInfo && (
          <>
            {companyPost.length > 0 && (
              <div className={style.userInfo}>
                <div className={style.profileContainerInfo}>
                  <div
                    className={style.back}
                    onClick={() => setDisplayInfo(false)}
                  >
                    close
                  </div>
                  <div className={style.profile}>
                    <div></div>
                  </div>
                  <div className={style.nameAndMore}>
                    <div className={style.nameInfo}>
                      <strong>{companyPost[0].employer.companyName}</strong>
                    </div>
                    <div className={style.website}>
                      <a href="#">{companyPost[0].employer.social2}</a>
                      <a href="#">{companyPost[0].employer.social1}</a>
                      <a href="#">{companyPost[0].employer.website}</a>
                    </div>
                  </div>
                </div>
                <div className={style.companyPost}>
                  {companyPost.map((post, index) => {
                    return (
                      <div key={index} className={style.post}>
                        <div className={style.header}>
                          <div className={style.profileContainer}>
                            <div className={style.nameAndJobType}>
                              <h3>
                                {post.title} - {post.type}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className={style.postContent}>
                          <div className={style.jobInfo}>
                            <h5>status {post.status}</h5>
                            <p>{post.description}</p>
                          </div>
                          <div className={style.action}>
                            <div className={style.likeContainer}>
                              <div className={style.likeAndNumber}></div>
                            </div>
                            <div className={style.buttonContainer}>
                              {post.status == "Open" && (
                                <button>Apply Now</button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
export default Home;
