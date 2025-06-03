import React from "react";
import "@/assets/css/default.css";
import "@/assets/css/header.css";
import "@/assets/css/index.css";
import "@/assets/css/footer.css";
import "@/assets/css/media-query.css";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { appstore, bluePlus, ChinaWavy, CoilWave, Green_Star, greenPlus, NigeriaWavy, orangeStar, playstore, yellowStar } from "../../data";
import { Link } from "react-router";
import { routes } from "../../data/routes";
import { PostHero, ThreeAsides } from "../../components/PageComponents/Landing/PostHero";
import { RatingStacks } from "../../components/LayoutComponents/UserStack";
import { FloatingItem } from "../../components/PageComponents/Landing/FloatingItem";
import { VideoSection } from "../../components/PageComponents/Landing/VideoSection";
import { Containment } from "./Containment";

export default function LandingPage() {
	return (
		<div className="v-layer-wrapper !bg-[var(--common-faint-bg)]">
      <section className="relative v-each-section has-bg" id="v-hero">
				<LandingPageHeader />
        <div className="relative w-full pb-8 mx-auto v-hero-inner lg:w-11/12 xl:w-9/12 lg:pb-48">
          <div className="relative px-3 py-24 mt-4 lg:px-0">
            <FloatingItem src={CoilWave} cn="top-1/3 left-4 w-24 rotate-[240deg] hidden md:flex blur-sm md:blur-none" />
            <div className="items-center mx-auto lg:items-start gap-y-8">
							<aside className="p-0 v-aside">
                <div className="relative flex flex-col justify-center mx-auto text-center v-hero-content gap-y-3 col-12 xs:w-11/12 xl:w-9/12 lg:pt-4">
                  <FloatingItem src={bluePlus} cn="-top-5 left-1/3 -translate-x-4 w-24 blur-sm md:blur-none" />
									<FloatingItem src={yellowStar} cn="top-1/3 right-0 lg:-right-1/4 -translate-x-4 w-24 blur-sm md:blur-none" />
                  <div className="relative flex items-center justify-center text-white gap-x-3">
										<span>Excellent</span>
										<RatingStacks />
										<div className="flex items-center gap-x-1">
											<img src={Green_Star} alt="" className="w-4" />
                      <span className="flex text-sm leading-tight">Truspilot</span>
										</div>
									</div>
                  <h1 className="relative text-4xl font-bold leading-none text-white md:text-6xl sm:text-5xl md:leading-tight">
										Make payment <br />
										to China from Nigeria Easily.
									</h1>
                  <div className="relative flex flex-col items-center w-full mx-auto text-center v-hero-text-content sm:w-9/12 md:w-8/12 lg:w-7/12">
										<span className="text-white v-text">
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
											<FloatingItem src={orangeStar} cn="-top-5 -right-2 z-[1]" />
											<FloatingItem src={greenPlus} cn="-bottom-8 -left-4 z-[1]" />
											<input
												type="email"
												className="w-full rounded-2xl backdrop-blur-sm bg-white/20 border placeholder:text-white/60 placeholder:text-[.95rem] border-white/30 min-h-[3.2rem] sm:min-h-[4rem] py-5 sm:py-4 pl-4 text-white text-sm sm:text-lg sm:pr-40 pr-32 tracking-wide"
												spellCheck="false"
												placeholder="Enter your email address"
											/>
											<button
												type="button"
												className="bg-[#F5F5DC] absolute top-1/2 right-3 -translate-y-1/2 text-main rounded-xl animate-active flex items-center justify-center py-3 px-4 sm:px-8 text-sm sm:text-base font-semibold">
												Get Started
											</button>
										</div>
										<div className="flex flex-wrap items-center justify-center gap-3 mt-1">
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
						</div>
					</div>
          <div className="relative px-4 lg:absolute lg:bottom-0 lg:translate-y-1/2 sm:px-0">
						<ThreeAsides />
					</div>
				</div>
			</section>

      <section className="flex flex-col w-full px-4 mx-auto mt-8 xl:w-10/12 gap-y-8 lg:mt-56">
				<PostHero />
			</section>
			<section className="bg-main">
				<VideoSection />
			</section>
			<Containment />
		</div>
	);
}
