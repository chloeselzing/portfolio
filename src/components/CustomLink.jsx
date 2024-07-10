import React from "react";
import { Link } from "react-router-dom";


const CustomLink = (href, title) => {
  return (
    <Link to={href} className="nav2-link active mb-2">
      {title}
    </Link>
  );
};

export default CustomLink;
