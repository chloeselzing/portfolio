import React from "react";

const CustomLink = ({ href, title }) => {
  const handleClick = () => {
    const element = document.getElementById(href.substring(1)); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <button className="nav2-link active mb-2" onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomLink;
