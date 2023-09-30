import React, { useState, useEffect } from "react";
import "./app.css";
import avatar from "./assets/peep.svg";
import jslogo from "./assets/icons8-javascript.svg";
import tslogo from "./assets/icons8-typescript.svg";
import reactlogo from "./assets/icons8-react.svg";
import figmalogo from "./assets/icons8-figma.svg";
import hangman from "./assets/hangman.png";
import budget from "./assets/budget.png";
import weather from "./assets/weather.png";
import telegram from "./assets/telegram.svg";
import mail from "./assets/mail.png";
import github from "./assets/icons8-github.svg";
import linkedin from "./assets/icons8-линкедин-48.png";

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 3) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className="navbar"></div>
      <img style={{ width: "300px" }} src={avatar} alt="avatar" />
      <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
        Привет, меня зовут <br />
        <span style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Данила Груздев{" "}
        </span>
        <br />
        и я <br />
        <span style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Frontend
        </span>{" "}
        разработчик.
      </div>
      <div
        className={`description floatingText ${showText ? "showText" : ""}`}
        style={{ marginTop: "33px" }}
      >
        Я изучаю web-разработку с 2020 года. В своем обучении использую такие
        ресурсы, как Udemy, freeCodeCamp и многие другие. Имею высшее
        образование, связанное с иностранными языками, что позволяет мне изучать
        документацию и другие материалы в оригинале.
      </div>
      <div className={`skills floatingText ${showText ? "showText" : ""}`}>
        <span style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Мои навыки
        </span>
        <div className="skill">
          <img className="skill-icon" src={jslogo} alt="jslogo" />
          <div className="skill-name">JavaScript</div>
        </div>
        <div className="skill">
          <img className="skill-icon" src={tslogo} alt="tslogo" />
          <div className="skill-name">TypeScript</div>
        </div>
        <div className="skill">
          <img className="skill-icon" src={reactlogo} alt="reactlogo" />
          <div className="skill-name">React</div>
        </div>
        <div className="skill">
          <img className="skill-icon" src={figmalogo} alt="figmalogo" />
          <div className="skill-name">Figma</div>
        </div>
      </div>
      <div className={`projects floatingText ${showText ? "showText" : ""}`}>
        <span style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Мои проекты
        </span>
        <div className="project">
          <img className="project-img1" src={hangman} alt="hangman" />
          <a href="https://hangman-i5036iu09-dangruzdev.vercel.app/">
            <div>Игра "Виселица"</div>
            <div>TypeScript + React</div>
          </a>
        </div>

        <div className="project">
          <img className="project-img2" src={budget} alt="budget" />
          <a href="https://budget-app-bice.vercel.app/">
            <div>Трекер бюджета</div>
            <div>JavaScript + React</div>
          </a>
        </div>

        <div className="project">
          <img className="project-img3" src={weather} alt="weather" />
          <a href="https://weather-app-sigma-murex.vercel.app/">
            <div>Прогноз погоды в городе</div>
            <div>JavaScript + React</div>
          </a>
        </div>
      </div>
      <div className={`projects floatingText ${showText ? "showText" : ""}`}>
        <span style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Связь со мной
        </span>
        <div className="contacts">
          <div className="contact">
            <a href="https://t.me/Skeppah">
              <img
                style={{ width: "45px", height: "auto" }}
                src={telegram}
                alt="telegram"
              />
              <div>Telegram</div>
              <div style={{ fontSize: "1rem" }}>@skeppah</div>
            </a>
          </div>
          <div className="contact">
            <a href="mailto:itsdangruzdev@gmail.com">
              <img
                style={{ width: "45px", height: "auto" }}
                src={mail}
                alt="mail"
              />
              <div>E-mail</div>
              <div style={{ fontSize: "1rem" }}>itsdangruzdev@gmail.com</div>
            </a>
          </div>
          <div className="contact">
            <a href="https://github.com/dangruzdev">
              <img
                style={{ width: "45px", height: "auto" }}
                src={github}
                alt="github"
              />
              <div>Github</div>
              <div style={{ fontSize: "1rem" }}>github.com/dangruzdev</div>
            </a>
          </div>
          <div className="contact">
            <a href="https://www.linkedin.com/in/dangruzdev/">
              <img
                style={{ width: "45px", height: "auto" }}
                src={linkedin}
                alt="linkedin"
              />
              <div>LinkedIn</div>
              <div style={{ fontSize: "1rem" }}>linkedin.com/in/dangruzdev</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
