import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PRICING",
  description: "in Progress",
};

const page = () => {
  return (
    <section className="relative mt-20 pb-64 bg-white">
      <div className="relative flex justify-center pt-20 lg:pt-5">
        <div className="container">
          <div className="text-center mb-28">
            <div className="mx-auto text-center lg:mt-8 mb-3 w-full lg:w-1/2">
              <h1 className="font-bold bg-gradient-to-br text-dark1 text-4xl mb-3 lg:text-4xl pb-8 animate-bounce" >
                PRICING
              </h1>
            </div>
            <div className="mt-9 ">
              <h3 className="font-bold text-xl pt-10 animate-bounce">COMING SOON GUYS! RIGHT UP!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;