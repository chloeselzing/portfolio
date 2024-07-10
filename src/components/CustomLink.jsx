import React from "react";
import Link from 'next/link';


const CustomLink = ({ href, title,className,target }) => {
  return (
    <Link href={href} className={className} target={target}  >
      {title}
    </Link>
  );
};

export default CustomLink;
