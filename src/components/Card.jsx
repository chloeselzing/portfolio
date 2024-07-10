
"use client"

import React from 'react';

const Card = ({ title, icon }) => {
  return (
    <div className="w-[20vw] rounded-md border border-gray-700 flex flex-col-2 items-center justify-center text-center h-[50px] lg:w-[200px] md:w-[120px] p-1 sm:py-4"> 
      <h3 className="lg:text-l text-[15px] text-black font-bold ">{title}</h3>
      {icon && ( 
          <div className="hidden mr-2 pt-1 pl-1 text-black lg:block">
            {icon} 
          </div>
        )}
    </div>
  );
};

export default Card;
