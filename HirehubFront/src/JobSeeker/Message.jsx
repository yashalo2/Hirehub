import { useState } from "react";
import search from "../assets/search.png";
import send from "../assets/send.svg";
import style from "./Message.module.css";
function Message() {
  const [messages, setMessages] = useState(true);
  return (
    <>
      <div className={style.container}>
        <div
          className={`${style.messagingUsersContainer} ${messages ? style.onPhone : style.messagingUsersContainer}`}
        >
          <div className={style.searchContainer}>
            <input type="text" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className={style.users}>
            <div className={style.user} onClick={() => setMessages(false)}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
            <div className={style.user}>
              <div className={style.profile}></div>
              <div className={style.username}>
                <strong>Yasin</strong>
              </div>
              <div className={style.employerLatestMessage}>
                <p>employer is messaging You . do you wanna reply?</p>
              </div>
              <div className={style.sentAt}>
                <p>2/22/2026 2:45</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.messageContainer} ${messages ? style.messageContainer : style.messageOnPhone}`}
        >
          <div className={style.individualMessage}>
            <button className={style.button} onClick={() => setMessages(true)}>
              back
            </button>
            <div className={style.employerMessagingProfile}></div>
            <strong>Google</strong>
          </div>
          <div className={style.message}>
            <div className={style.contentContainer}>
              <div className={style.content}>
                <p>
                  This project, titled “Design and Evaluation of an LLM-Based
                  Afaan Oromo Conversational AI System,” addresses this
                  challenge by focusing on the systematic design of a
                  conversational AI system capable of interacting in Afaan
                  Oromo. The system leverages recent advances in large language
                  models to enable
                </p>
              </div>
            </div>
            <div className={style.contentContainer}>
              <div className={style.content}>
                <p>
                  This project, titled “Design and Evaluation of an LLM-Based
                  Afaan Oromo Conversational AI System,” addresses this
                  challenge by focusing on the systematic design of a
                  conversational AI system capable of interacting in Afaan
                  Oromo. The system leverages recent advances in large language
                  models to enable
                </p>
              </div>
            </div>
            <div
              className={style.contentContainer}
              style={{ justifyContent: "start" }}
            >
              <div className={style.content} style={{ background: "#fff" }}>
                <p>
                  This project, titled “Design and Evaluation of an LLM-Based
                  Afaan Oromo Conversational AI System,” addresses this
                  challenge by focusing on the systematic design of a
                  conversational AI system capable of interacting in Afaan
                  Oromo. The system leverages recent advances in large language
                  models to enable
                </p>
              </div>
            </div>
            <div className={style.contentContainer}>
              <div className={style.content}>
                <p>
                  This project, titled “Design and Evaluation of an LLM-Based
                  Afaan Oromo Conversational AI System,” addresses this
                  challenge by focusing on the systematic design of a
                  conversational AI system capable of interacting in Afaan
                  Oromo. The system leverages recent advances in large language
                  models to enable
                </p>
              </div>
            </div>
          </div>
          <div className={style.messageSending}>
            <textarea name="message" id=""></textarea>
            <button>
              <img src={send} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Message;
