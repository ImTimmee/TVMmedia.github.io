import React from "react";
import AutoScrollCarousel from "./AutoScrollCarousel";

const Customers = () => {
  return (
    <div className="min-h-[300px] md:min-h-[600px] flex flex-col w-full relative">
      <div className="w-full flex flex-col">
        <div className="w-full">
          <AutoScrollCarousel />
        </div>
        <div className="pt-64 flex flex-col items-end gap-4">
          <p className="text-3xl sm:text-4xl md:text-5xl tracking-wide anton">
            MERKEN DIE ONS VERTROUWEN
          </p>
          <p className="sm:text-xl/tight md:text-2xl/tight anton tracking-wider">
            Van 0.a deze klanten worden wij erg blij.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
