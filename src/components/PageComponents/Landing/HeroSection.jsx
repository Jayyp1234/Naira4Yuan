import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appstore, bluePlus, ChinaWavy, CoilWave, Green_Star, greenPlus, NigeriaWavy, playstore, yellowStar } from "@/data";
import { FloatingItem } from "./FloatingItem";
import { RatingStacks } from "../../LayoutComponents/UserStack";
import { routes } from "@/data/routes";
import { XchangeBoard } from "../../LayoutComponents/Xchange";
import { Link } from "react-router";

export const HeroSection = ({ pageTitle = "" }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    navigate(`/auth/login?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="py-24 mt-4 px-3 lg:px-0 relative">
      <div className="grid grid-cols-1 lg:grid-cols-7 items-center lg:items-start gap-8 md:w-10/12  xl:w-full mx-auto">
        <aside className="col-span-7 lg:col-span-4 v-aside relative">
          <FloatingItem src={CoilWave} cn="top-2/3 right-4 w-24 rotate-[240deg] blur-sm md:blur-none" />
          <div className="v-hero-content flex flex-col gap-y-3 text-center lg:text-start justify-center col-12 xs:w-11/12 mx-auto lg:pt-4 lg:ms-0 relative">
            <FloatingItem src={bluePlus} cn="-top-5 left-3/4 -translate-x-4 w-24 blur-sm md:blur-none" />
            <div className="text-white justify-center lg:justify-start flex items-center gap-x-3 relative">
              <span>Excellent</span>
              <RatingStacks />
              <div className="flex items-center gap-x-1">
                <img src={Green_Star} alt="" className="w-4" />
                <span className="text-sm leading-tight flex">Truspilot</span>
              </div>
            </div>
            <div className="lg:w-11/12 xl:w-9/12">
              <h1 className="text-4xl text-white md:text-6xl sm:text-5xl font-bold leading-tight w-md relative">{pageTitle}</h1>
            </div>
            <div className="v-hero-text-content w-full lg:text-start lg:items-start mx-auto flex flex-col items-center text-center relative sm:w-10/12 lg:ms-0">
              <span className="text-white text-lg">
                The fastest 🚀 way to make payment for goods and services in China
                <span className="v-country-wavy-flag">
                  <img src={ChinaWavy} alt="" className="img-fluid" />
                </span>
                from Nigeria
                <span className="v-country-wavy-flag">
                  <img src={NigeriaWavy} alt="" className="img-fluid" />
                </span>
              </span>
              <div className="relative w-full mt-5 mb-6">
                <FloatingItem src={greenPlus} cn="bottom-1/2 right-36 z-[1]" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full rounded-2xl backdrop-blur-sm bg-white/20 border placeholder:text-white/60 placeholder:text-[.95rem] border-white/30 min-h-[3.2rem] sm:min-h-[4rem] py-5 sm:py-4 pl-4 text-white text-sm sm:text-lg sm:pr-40 pr-32 tracking-wide"
                  spellCheck="false"
                  placeholder="Enter your email address"
                />
                <button
                  type="button"
                  className="bg-[#F5F5DC] absolute top-1/2 right-3 -translate-y-1/2 text-main rounded-xl animate-active flex items-center justify-center py-3 px-4 sm:px-8 text-sm sm:text-base font-semibold"
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
                
              </div>
			  {error && (
                  <div className="text-red-400 text-xs my-2 text-left">{error}</div>
                )}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-1 relative">
                <Link to={routes.LINKS.googlestore} className="v-store-link">
                  <figure className="v-store-link-image !w-28 sm:!w-32" title="Playstore">
                    <img src={playstore} alt="google play logo" className="img-fluid" />
                  </figure>
                </Link>
                <Link to={routes.LINKS.appstore} className="v-store-link">
                  <figure className="v-store-link-image !w-28 sm:!w-32" title="Appstore">
                    <img src={appstore} alt="appstore logo" className="img-fluid" />
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <aside className="col-start-1 col-end-8 sm:col-start-2 sm:col-end-7 lg:col-span-3 relative">
          <FloatingItem src={yellowStar} cn="top-1/3 right-0 lg:-right-1/4 -translate-x-4 w-24 blur-sm md:blur-none" />
          <XchangeBoard />
        </aside>
      </div>
    </div>
  );
};