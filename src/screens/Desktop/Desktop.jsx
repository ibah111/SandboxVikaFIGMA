import React from "react";
import { BigButton } from "../../components/BigButton";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="div-3">
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="home">
                <div className="gleb">
                  <div className="overlap">
                    <div className="ellipse" />
                    <div className="group-4">
                      <div className="div-wrapper">
                        <div className="text-wrapper-6">fg</div>
                      </div>
                      <div className="overlap-group-3">
                        <div className="text-wrapper-7">Ai</div>
                      </div>
                      <div className="overlap-2">
                        <div className="text-wrapper-8">UI</div>
                      </div>
                      <div className="overlap-3">
                        <div className="text-wrapper-9">Ps</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title">
                  <div className="text-wrapper-10">Привет!</div>
                  <div className="text-wrapper-11">
                    Я Вика
                    <br />
                    Лумпова
                  </div>
                  <p className="p">
                    {" "}
                    Я помогаю стартапам достигать успеха, создавая эффективные маркетинговые кампании, которые
                    привлекают внимание. Свяжитесь со мной сегодня, чтобы узнать, как я могу помочь вашему стартапу
                    достичь успеха.
                  </p>
                  <Button className="button-8" />
                </div>
              </div>
              <img
                className="element-5"
                alt="Element"
                src="https://c.animaapp.com/M1WYoM5H/img/-------------1@2x.png"
              />
            </div>
          </div>
          <div className="div-3">
            <img className="bg" alt="Bg" src="https://c.animaapp.com/M1WYoM5H/img/bg2-1.svg" />
            <img className="bg-2" alt="Bg" src="https://c.animaapp.com/M1WYoM5H/img/bg2.svg" />
            <div className="overlap-4">
              <div className="ellips">
                <div className="overlap-5">
                  <div className="overlap-group-4">
                    <div className="ellipse-2" />
                    <div className="ellipse-3" />
                  </div>
                  <div className="ellipse-4" />
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-6">
                  <img
                    className="photo"
                    alt="Photo"
                    src="https://c.animaapp.com/M1WYoM5H/img/photo-2021-08-30-22-31-34@2x.png"
                  />
                  <div className="element-wrapper">
                    <img
                      className="element-tcpaqauy"
                      alt="Element"
                      src="https://c.animaapp.com/M1WYoM5H/img/1tcpaqau78y-1@2x.png"
                    />
                  </div>
                  <div className="photo-wrapper">
                    <img
                      className="photo-2"
                      alt="Photo"
                      src="https://c.animaapp.com/M1WYoM5H/img/photo-2021-08-30-22-31-41@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-12">Обо мне</div>
            </div>
          </div>
          <header className="header">
            <div className="frame-3">
              <BigButton
                adaptivity="desktop"
                buttonClassName="big-button-2"
                className="big-button-instance"
                counter="off"
                stateProp="default"
                text="ОБО МНЕ"
                type="third"
              />
              <BigButton
                adaptivity="desktop"
                buttonClassName="big-button-2"
                className="big-button-3"
                counter="off"
                stateProp="default"
                text="КОНТАКТ"
                type="third"
              />
            </div>
            <div className="LOGO">
              <div className="overlap-group-5">
                <p className="torilla">
                  <span className="span">Torilla</span>
                  <span className="text-wrapper-13">
                    {" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                </p>
                <div className="design">DESIGN</div>
              </div>
            </div>
          </header>
        </div>
        <footer className="adaptivity-desktop-wrapper">
          <Footer adaptivity="desktop" className="footer-instance" />
        </footer>
      </div>
    </div>
  );
};
