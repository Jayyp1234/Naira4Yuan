import React from "react";
import { CompanyImageStacks } from "../../components/LayoutComponents/UserStack";
import { Containment } from "./Containment";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { HeroSection } from "../../components/PageComponents/Landing/HeroSection";
import { cutGreenPlus, display1, display2, whiteCircle } from "../../data";
import { Link } from "react-router";

export default function Contact() {
	return (
		<div className="v-layer-wrapper !bg-[var(--common-faint-bg)]">
			<section className="v-each-section relative has-bg" id="v-hero">
				<LandingPageHeader />
				<div className="v-hero-inner w-full lg:w-11/12 xl:w-9/12 mx-auto relative pb-8 lg:pb-14">
					<HeroSection pageTitle="Contact Us: Make payment to China from Nigeria Easily." />
				</div>
			</section>
			<section className="px-4 xl:w-10/12 mx-auto w-full flex flex-col gap-y-8 mt-14">
				<CompanyImageStacks />
				<div className="lg:w-10/12 xl:w-10/12 mx-auto mt-8 mb-14 flex flex-col gap-y-8">
					{/* <div className=""> */}
					<section className="v-contact-form">
						<div className="container-lg p-md-0">
							<div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto items-start justify-between gap-y-10">
								<aside className="col-md p-0">
									<div className="v-inner">
										<span className="bg-[#CAFFDC] w-max flex items-center px-5 text-main rounded-2xl py-2.5">
											<b>Contact us</b>
										</span>
										<div className="v-main-content">
											<h4 className="text-xl">
												<span>Out Hotline</span>
											</h4>
											<h2 className="text-3xl">
												<b>+2348080000400</b>
											</h2>
											<div className="flex items-center gap-x-4 mt-4">
												<button type="button" className="bg-black text-white rounded-xl py-2.5 px-5">
													Book a Demo
												</button>
												<button type="button" className="bg-[#219653] text-white rounded-xl py-2.5 px-5">
													Send an email
												</button>
											</div>
										</div>
									</div>
								</aside>
								<aside className="col-md p-0">
									<div className="v-inner">
										<span className="bg-[#CAFFDC] w-max flex items-center px-5 text-main rounded-2xl py-2.5">
											<b>Email us</b>
										</span>
										<div className="v-main-content">
											<h4 className="text-xl">
												<span>Send us email at </span>
											</h4>
											<h2 className="text-3xl">
												<b>support@naira4yuan.com</b>
											</h2>
										</div>
									</div>
								</aside>
							</div>
							<hr className="mt-20 mb-14" />
							<div className="max-w-3xl mx-auto bg-[#f8f8df] px-0 md:px-6 rounded">
								<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-gray-700 font-medium">Your First Name*</label>
										<input type="text" className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" />
									</div>

									<div>
										<label className="block text-gray-700 font-medium">Your Last Name*</label>
										<input type="text" className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" />
									</div>

									<div>
										<label className="block text-gray-700 font-medium">Your Email*</label>
										<input type="email" className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" />
									</div>

									<div>
										<label className="block text-gray-700 font-medium">Your Phone Number*</label>
										<input type="tel" className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" />
									</div>
									<div>
										<label className="block text-gray-700 font-medium">Country*</label>
										<input type="text" className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" />
									</div>
									<div>
										<label className="block text-gray-700 font-medium">State</label>
										<input type="text" className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" />
									</div>
									<div className="md:col-span-2">
										<label className="block text-gray-700 font-medium">Body</label>
										<textarea rows="4" className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]"></textarea>
									</div>

									{/* Checkbox */}
									<div className="md:col-span-2 flex items-start">
										<input type="checkbox" id="terms" className="mr-2 w-4 h-4" />
										<label htmlFor="terms" className="text-gray-700 text-sm">
											I accept Gate Africa’s engagement terms as included in the terms and conditions document.
										</label>
									</div>

									{/* Submit Button */}
									<div className="md:col-span-2">
										<button type="button" className="w-full bg-black text-white py-3.5 rounded-md hover:bg-gray-900 transition">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</section>
				</div>
			</section>
			<Containment />
		</div>
	);
}
