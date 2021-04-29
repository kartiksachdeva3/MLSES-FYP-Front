import React from "react";
import  style from './Button.module.css';


const STYLES = [`${style.btnPrimary} ${style.btnOutline}`];

const SIZES = [`${style.btnMedium} ${style.btnLarge} ${style.btnMobile} ${style.btnWide}`];

const COLOR = [`${style.primary} ${style.blue} ${style.red} ${style.green}`];

export const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
