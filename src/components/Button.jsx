"use client";
import React, { useState } from "react";

const Button = ({
  href,
  text,
  color = "purple-500",
  gradientFrom = color,
  gradientTo = `${color}-500`,
  children,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      window.location.href = href;
      setIsClicked(false);
    }, 200);
  };

  return (
    <button
      className={` bg-gradient-to-r ${gradientFrom} ${gradientTo} custom-button text-${color}  font-bold lg:py-2 lg:px-4 py-1 px-1 min-w-[100px] rounded flex flex-col-2 ${
        isClicked ? "button-click-animation" : ""
      }`}
      onClick={handleClick}
    >
      {text}
      {children && <span className="button-tag p-1">{children}</span>}{" "}
    </button>
  );
};

export default Button;
