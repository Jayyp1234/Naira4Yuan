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
			<section className="v-each-section relative has-bg" id="v-hero">
				<LandingPageHeader />
				<div className="v-hero-inner w-full lg:w-11/12 xl:w-9/12 mx-auto relative pb-8 lg:pb-48">
					<div className="py-24 mt-4 px-3 lg:px-0 relative">
						<FloatingItem src={CoilWave} cn="top-1/3 left-4 w-24 rotate-[240deg] blur-sm md:blur-none" />
						<div className="mx-auto items-center lg:items-start gap-y-8">
							<aside className="p-0 v-aside">
								<div className="v-hero-content flex flex-col gap-y-3 text-center justify-center col-12 xs:w-11/12 xl:w-9/12 mx-auto lg:pt-4 relative">
									<FloatingItem src={bluePlus} cn="-top-5 left-1/3 -translate-x-4 w-24 blur-sm md:blur-none" />
									<FloatingItem src={yellowStar} cn="top-1/3 right-0 lg:-right-1/4 -translate-x-4 w-24 blur-sm md:blur-none" />
									<div className="text-white justify-center flex items-center gap-x-3 relative">
										<span>Excellent</span>
										<RatingStacks />
										<div className="flex items-center gap-x-1">
											<img src={Green_Star} alt="" className="w-4" />
											<span className="text-sm leading-tight flex">Truspilot</span>
										</div>
									</div>
									<h1 className="text-4xl text-white md:text-6xl sm:text-5xl font-bold leading-tight relative">
										Make payment <br />
										to China from Nigeria Easily.
									</h1>
									<div className="v-hero-text-content w-full sm:w-9/12 md:w-8/12 lg:w-7/12 mx-auto flex flex-col items-center text-center relative">
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
					<div className="relative lg:absolute lg:bottom-0 lg:translate-y-1/2 px-4 sm:px-0">
						<ThreeAsides />
					</div>
				</div>
			</section>

			<section className="px-4 xl:w-10/12 mx-auto w-full flex flex-col gap-y-8 mt-8 lg:mt-56">
				<PostHero />
			</section>
			<section className="bg-main">
				<VideoSection />
			</section>
			<Containment />
		</div>
	);
}
