import React from "react";
import { CompanyImageStacks } from "../../components/LayoutComponents/UserStack";
import { Containment } from "./Containment";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { HeroSection } from "../../components/PageComponents/Landing/HeroSection";
import { cutGreenPlus, display1, display2, whiteCircle } from "../../data";

export default function About() {
	return (
		<div className="v-layer-wrapper !bg-[var(--common-faint-bg)]">
			<section className="v-each-section relative has-bg" id="v-hero">
				<LandingPageHeader />
				<div className="v-hero-inner w-full lg:w-11/12 xl:w-9/12 mx-auto relative pb-8 lg:pb-14">
					<HeroSection pageTitle="About Us: Make payment to China from Nigeria Easily." />
				</div>
			</section>
			<section className="px-4 xl:w-10/12 mx-auto w-full flex flex-col gap-y-8 mt-14">
				<CompanyImageStacks />
				<div className="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-8 mb-14 flex flex-col gap-y-8">
					<header className="text-center mb-8 mt-5">
						<h3 className="text-3xl md:text-4xl font-bold mb-4">About Us</h3>
						<span>About Niara4yuan.com</span>
					</header>
					<div className="text-justify">
						<p className="text-lg">
							Naira4Yuan was founded with a clear mission: to simplify and streamline currency exchange between Nigeria and China. Whether you’re
							paying for goods, sourcing from suppliers, or supporting family abroad, our platform provides fast, secure, and transparent
							transactions—helping you save both time and money. <br />
							<br /> We leverage innovative technology to offer competitive rates for the Chinese Yuan (RMB), real-time transaction updates, and a
							user-friendly process that eliminates the hassles often associated with cross-border payments. <br />
							<br /> At Naira4Yuan, we believe that global trade should be accessible to all, and we’re committed to driving growth by empowering
							businesses, entrepreneurs, and individuals to confidently engage with the Chinese market. <br />
							<br />
							Above all, we place our customers at the heart of everything we do. Our dedicated support team is always on standby to provide
							assistance and ensure a smooth experience. Join us today, and discover how Naira4Yuan can revolutionize your cross-border transactions.
						</p>
					</div>
				</div>
				<div className="mb-10">
					<section className="v-each-section flex flex-col gap-y-12 md:gap-y-20 v-mission-vision">
						<div className="flex flex-wrap md:flex-row-reverse w-full sm:w-10/12 md:w-11/12 justify-between xl:justify-evenly gap-5 mx-auto mt-10 items-start gap-y-10 pt-md-10">
							<aside className="w-full md:w-1/2 xl:w-5/12" role="presentation">
								<div className="v-aside-inner flex flex-col gap-y-2">
									<h1 className="v-content-title text-3xl md:text-4xl lg:w-10/12">
										<b>Our Mission</b>
									</h1>
									<span className="v-text mt-5 mb-4">
										To break down financial barriers and seamlessly connect Nigeria with China, enabling businesses and individuals to make fast,
										secure, and cost-effective transactions. We’re committed to delivering transparency, innovation, and unparalleled customer
										support—ensuring that our users can confidently engage in global trade.
									</span>
								</div>
							</aside>
							<aside className="w-full md:w-1/2 xl:w-5/12" role="presentation">
								<div className="v-aside-inner">
									<div className="v-layer !justify-between">
										<span className="v-icon" role="img">
											<img src={whiteCircle} alt="" className="img-fluid" />
										</span>
										<span className="v-icon" role="img">
											<img src={cutGreenPlus} alt="" className="img-fluid" />
										</span>
									</div>
									<figure role="img" className="v-image">
										<img src={display1} alt="" className="img-fluid" />
									</figure>
								</div>
							</aside>
						</div>
						<div className="flex flex-wrap md:flex-row w-full sm:w-10/12 md:w-11/12 justify-between xl:justify-evenly gap-5 mx-auto mt-10 items-start gap-y-10 pt-md-10">
							<aside className="w-full md:w-1/2 xl:w-5/12" role="presentation">
								<div className="v-aside-inner flex flex-col gap-y-2">
									<h1 className="v-content-title text-3xl md:text-4xl lg:w-10/12">
										<b>Our Vision</b>
									</h1>
									<span className="v-text mt-5 mb-4">
										We envision a world where cross-border payments are frictionless, empowering businesses of all sizes to thrive in the global
										marketplace. By continually innovating and forging strong partnerships, we aim to become the go-to platform for Nigeria-China
										transactions, fueling economic growth and fostering deeper international collaboration.
									</span>
								</div>
							</aside>
							<aside className="w-full md:w-1/2 xl:w-5/12" role="presentation">
								<div className="v-aside-inner">
									<div className="v-layer !justify-between">
										<span className="v-icon" role="img">
											<img src={whiteCircle} alt="" className="img-fluid" />
										</span>
										<span className="v-icon" role="img">
											<img src={cutGreenPlus} alt="" className="img-fluid" />
										</span>
									</div>
									<figure role="img" className="v-image">
										<img src={display2} alt="" className="img-fluid" />
									</figure>
								</div>
							</aside>
						</div>
					</section>
				</div>
			</section>
			<Containment />
		</div>
	);
}
