import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url( https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            <h1 className="hidden sm:block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-lime-300 pr-5 text-6xl text-lime-300 font-bold">
              Welcome To BookStore
            </h1>
            <h1 className=" md:hidden animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-lime-300 pr-5 text-3xl text-lime-300 font-bold">
            Welcome To BookStore
            </h1>
            <p className=" text-black text-sm md:text-xl font-semibold p-3">
              Our user-friendly platform makes browsing and discovering your
              next favorite book easy Explore, rent, or buy your reading journey
              starts here!
            </p>
            <button className="btn btn-outline btn-xs text-black hover:bg-blue-200"> Get Started <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
