import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center sm:justify-between text-center items-center px-4 w-full">
      <img
        src="/logo.svg"
        alt=""
        className="opacity-50 h-[80px] w-[80px] md:h-[120px] md:w-[120px] hidden sm:block"
      />
      <div>
        <p className="font-semibold text-xl sm:text-md md:text-xl">TVM</p>
        <p className="font-bold text-3xl sm:text-2xl md:text-3xl">MEDIA</p>
      </div>
    </div>
  );
};

export default Header;
