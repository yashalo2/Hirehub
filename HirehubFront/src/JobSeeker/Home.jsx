import { useState } from "react";
import style from "./Home.module.css";
function Home() {
  const [suggestion, setSuggestion] = useState(true);
  const [suggestionHidden, setSuggestionHidden] = useState(true);
  const [allHidden, setAllHidden] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const General = () => {
    setSuggestion(true);
    setSuggestionHidden(true);
    setAllHidden(false);
    console.log("hello");
  };
  const Suggest = () => {
    setSuggestion(false);
    setSuggestionHidden(false);
    setAllHidden(true);
  };
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
            <div className={suggestion ? style.postContainer : style.hide}>
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div
                  className={style.header}
                  onClick={() => setDisplayInfo(true)}
                >
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Google</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
            <div className={suggestion ? style.suggest : style.suggested}>
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
          <div className={style.userInfo}>
            <div className={style.profileContainerInfo}>
              <div className={style.back} onClick={() => setDisplayInfo(false)}>
                close
              </div>
              <div className={style.profile}>
                <div></div>
              </div>
              <div className={style.nameAndMore}>
                <div className={style.nameInfo}>
                  <strong>Spotify</strong>
                </div>
                <div className={style.website}>
                  <a href="#">http://telegram/username</a>
                  <a href="#">http://telegram/sdgsdigsdiogvsdiog/username</a>
                  <a href="#">http://telegm/usme</a>
                </div>
              </div>
            </div>
            <div className={style.companyPost}>
              <div className={style.post}>
                <div className={style.header}>
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Spotify</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div className={style.header}>
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Spotify</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div className={style.header}>
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Spotify</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div className={style.header}>
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Spotify</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div className={style.header}>
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Spotify</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
              <div className={style.post}>
                <div className={style.header}>
                  <div className={style.profileContainer}>
                    <div className={style.profile}></div>
                    <div className={style.nameAndJobType}>
                      <strong>Spotify</strong>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className={style.postContent}>
                  <div className={style.jobInfo}>
                    <p>
                      This project, titled “Design and Evaluation of an
                      LLM-Based Afaan Oromo Conversational AI System,” addresses
                      this challenge by focusing on the systematic design of a
                      conversational AI system capable of interacting in Afaan
                      Oromo. The system leverages recent advances in large
                      language models to enable context-aware, text-based
                      conversations and to handle real-world language usage,
                      including mixed Afaan
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
        )}
      </div>
    </>
  );
}
export default Home;
