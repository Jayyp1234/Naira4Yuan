import React from "react";
import { CompanyImageStacks } from "../../components/LayoutComponents/UserStack";
import { Containment } from "./Containment";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { HeroSection } from "../../components/PageComponents/Landing/HeroSection";
import { cutGreenPlus, display1, display2, whiteCircle } from "../../data";

export default function About() {
	//const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiaGVpc2llbmJlcmciLCJhIjoiY203b3UyOGR6MGRuZzJqcXRpZnFmYnRwaCJ9.sWbZRpSx53eP9IaM1HCS3w"; // Replace with your actual token

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
				<div className="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-8 mb-14 flex flex-col gap-y-8"></div>
			</section>
			<Containment />
		</div>
	);
}
