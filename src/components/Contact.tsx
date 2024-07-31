import React from "react";
import Image from "next/image";
import ContactButton from "./ui/contact-button";

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center relative">
      <img
        src="/tvm-logo.png"
        alt=""
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
      />
      <div className="w-full flex justify-center">
        <p className="text-3xl/loose sm:text-4xl/loose md:text-5xl/loose anton">
          NOG NIET GENOEG GEHAD?
        </p>
      </div>
      <div className="py-4">
        <ContactButton />
      </div>
      <div className="py-4">
        <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl text-center anton">
          Neem contact met ons op en ontdek wat wij voor uw merk kunnen
          betekenen.
        </p>
      </div>

      <div className="flex flex-col items-center md:gap-4 md:pt-8">
        <p className="flex gap-2 items-center">
          <Image src="/pin-icon.svg" alt="" width={50} height={50} />
          <span className="text-2xl md:text-3xl anton">Tilburg</span>
        </p>
        <p className="flex gap-2 items-center">
          <Image src="/phone-icon.svg" alt="" width={32} height={32} />
          <span className="text-2xl md:text-3xl anton">31+ 6 10792505</span>
        </p>
      </div>
      <Image
        src="/vector-3-dorito.png"
        alt=""
        width={750}
        height={750}
        className="absolute -top-24 -right-[290px] sm:-right-[320px] md:-right-[400px]"
      />
      <Image
        src="/vector-3-dorito.png"
        alt=""
        width={750}
        height={750}
        className="absolute -top-64 -left-[290px] sm:-left-[320px] md:-left-[400px] rotate-180"
      />
    </div>
  );
};

export default Contact;
