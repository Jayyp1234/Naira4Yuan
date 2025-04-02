import React from "react";
import { Testimonial } from "../../components/PageComponents/Landing/Testimonial";
import { Faq } from "../../components/PageComponents/Landing/Faq";
import { PreFooter } from "../../components/PageComponents/Landing/PreFooter";
import { LandingPageFooter } from "../../Layouts/Landing/Footer";

export const Containment = () => {
	return (
		<section className="px-4 mb-5 xl:w-11/12 mx-auto w-full flex flex-col">
			<Testimonial />
			<Faq />
			<PreFooter />
			<LandingPageFooter />
		</section>
	);
};
