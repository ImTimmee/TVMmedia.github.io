"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ServiceItem, servicesList } from "@/lib/data";

const Services = () => {
  return (
    <div className="min-h-[400px] md:min-h-screen flex flex-col w-full container relative">
      <div className="w-full flex flex-col gap-4 sm:gap-8 md:gap-16">
        <div className="text-3xl/tight sm:text-4xl/tight md:text-6xl/tight font-bold flex gap-1 items-center">
          <img
            src="/tvm-logo.png"
            alt=""
            className="object-cover w-[100px] h-[100px] md:w-[150px] md:-[150px]"
          />
          <span>DIENSTEN</span>
        </div>
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="text-black"
          >
            <CarouselContent>
              {servicesList.map((item: ServiceItem, index) => (
                <CarouselItem
                  key={index}
                  className="basis md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="rounded-none px-2 py-24 max-h-fit">
                    <CardContent className="flex flex-col items-center gap-6 px-2">
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt=""
                        className="opacity-80 object-cover"
                      />
                      <span className="text-md sm:text-xl md:text-2xl font-bold text-center">
                        {item.title}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <Image
        src="/vector-3-dorito.png"
        alt=""
        width={750}
        height={750}
        className="absolute -top-60 -right-[300px] sm:-right-[360px] md:-right-[400px]"
      />
    </div>
  );
};

export default Services;
