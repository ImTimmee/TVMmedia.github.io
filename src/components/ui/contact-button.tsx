"use client";

import React from "react";
import { Button } from "./button";

const ContactButton = () => {
  const handleClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=Tvmdesigntilburg@gmail.com",
      "_blank"
    );
  };
  return (
    <div className="p-2 rounded-md gradient-background cursor-pointer">
      <Button
        className="px-24 py-6 md:px-28 md:py-8 bg-white text-zinc-800 text-xl md:text-2xl tracking-tighter anton  hover:bg-slate-50"
        onClick={handleClick}
      >
        Contact
      </Button>
    </div>
  );
};

export default ContactButton;
