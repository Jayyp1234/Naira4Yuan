import React, {useState} from "react";
import { CompanyImageStacks } from "../../components/LayoutComponents/UserStack";
import { Containment } from "./Containment";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { HeroSection } from "../../components/PageComponents/Landing/HeroSection";
import { useGetSystemOverviewQuery } from "../../states/services/authApi";
import { useContactUsMutation } from "../../states/services/authApi";


export default function Contact() {
	const { data, isLoading, error } = useGetSystemOverviewQuery();

    const hotline = data?.data?.system_settings?.support_hotline || "+2348080000400";
    const supportEmail = data?.data?.system_settings?.support_email || "support@naira4yuan.com";
	const [contactUs, { isLoading: isSubmitting, isSuccess, error: submitError }] = useContactUsMutation();

	const [form, setForm] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		country: "",
		state: "",
		body: "",
		terms_accepted: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({
		...prev,
		[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.terms_accepted) return alert("You must accept the terms.");
		await contactUs(form);
	};
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
                                                <b>{isLoading ? "Loading..." : hotline}</b>
                                            </h2>
											<div className="flex items-center gap-x-4 mt-4">
												<button type="button" className="bg-black text-white rounded-xl py-2.5 px-5">
													Book a Demo
												</button>
												<button
													type="button"
													className="bg-[#219653] text-white rounded-xl py-2.5 px-5"
													onClick={() => window.location.href = `mailto:${supportEmail}`}
												>
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
                                                <b>{isLoading ? "Loading..." : supportEmail}</b>
                                            </h2>
										</div>
									</div>
								</aside>
							</div>
							<hr className="mt-20 mb-14" />
							<div className="max-w-3xl mx-auto bg-[#f8f8df] px-0 md:px-6 rounded">
								 <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
									<div>
										<label className="block text-gray-700 font-medium">Your First Name*</label>
										<input name="first_name" type="text" value={form.first_name} onChange={handleChange} className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" required />
									</div>
									<div>
										<label className="block text-gray-700 font-medium">Your Last Name*</label>
										<input name="last_name" type="text" value={form.last_name} onChange={handleChange} className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" required />
									</div>
									<div>
										<label className="block text-gray-700 font-medium">Your Email*</label>
										<input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" required />
									</div>
									<div>
										<label className="block text-gray-700 font-medium">Your Phone Number*</label>
										<input name="phone_number" type="tel" value={form.phone_number} onChange={handleChange} className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" required />
									</div>
									<div>
										<label className="block text-gray-700 font-medium">Country*</label>
										<input name="country" type="text" value={form.country} onChange={handleChange} className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" required />
									</div>
									<div>
										<label className="block text-gray-700 font-medium">State</label>
										<input name="state" type="text" value={form.state} onChange={handleChange} className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" />
									</div>
									<div className="md:col-span-2">
										<label className="block text-gray-700 font-medium">Body</label>
										<textarea name="body" rows="4" value={form.body} onChange={handleChange} className="w-full px-3 py-2 border border-black/20 rounded-md min-h-[3rem]" required />
									</div>
									<div className="md:col-span-2 flex items-start">
										<input name="terms_accepted" type="checkbox" checked={form.terms_accepted} onChange={handleChange} id="terms" className="mr-2 w-4 h-4" required />
										<label htmlFor="terms" className="text-gray-700 text-sm">
										I accept Gate Africa’s engagement terms as included in the terms and conditions document.
										</label>
									</div>
									<div className="md:col-span-2">
										<button type="submit" className="w-full bg-black text-white py-3.5 rounded-md hover:bg-gray-900 transition" disabled={isSubmitting}>
										{isSubmitting ? "Submitting..." : "Submit"}
										</button>
										{isSuccess && <div className="text-green-600 mt-2">Message sent successfully!</div>}
										{submitError && <div className="text-red-600 mt-2">Failed to send message.</div>}
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
