
import React from "react";
import style from "./HeroSection.module.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className = {lightBg ? style.lightBg : style.darkBg}>
      <div
        className={style.homeheroSection}>
        
        <div className={style.container}>
          
          <div
            className={`${style.row}  ${style.homeheroRow}`}
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className={style.col}>
              <div className={style.homeheroTextwrapper}>
                <div className={style.topLine}>{topLine}</div>
                <h1 className={lightText ?`${style.heading} ${style.dark} ` : style.heading}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ?  style.darkdesc : style.homeheroSubtitle}
                >
                  {description}
                </p>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.homeheroImgwrapper}>
                <img src={img} alt={alt} className={style.homeheroImg} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
