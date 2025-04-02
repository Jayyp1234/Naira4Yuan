import React from "react";
import { CompanyImageStacks } from "../../components/LayoutComponents/UserStack";
import { Containment } from "./Containment";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { HeroSection } from "../../components/PageComponents/Landing/HeroSection";
import { cutGreenPlus, display1, display2, whiteCircle } from "../../data";

export default function Privacy() {
	return (
		<div className="v-layer-wrapper !bg-[var(--common-faint-bg)]">
			<section className="v-each-section relative has-bg" id="v-hero">
				<LandingPageHeader />
				<div className="v-hero-inner w-full lg:w-11/12 xl:w-9/12 mx-auto relative pb-8 lg:pb-14">
					<HeroSection pageTitle="Privacy Policy: Make payment to China from Nigeria Easily." />
				</div>
			</section>
			<section className="px-4 xl:w-10/12 mx-auto w-full flex flex-col gap-y-8 mt-14">
				<CompanyImageStacks />
				<div className="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-8 mb-14 flex flex-col gap-y-8">
					<div className="privacy-container py-8">
						<h1 className="text-2xl font-bold">Privacy Policy for Naira4Yuan Limited</h1>
						<p className="text-sm font-semibold text-gray-600 mb-3">Last Updated: [Insert Date]</p>
						<h2 className="text-2xl font-semibold mt-6 mb-4"> Introduction</h2>
						<p className="mb-4">
							We are Naira4Yuan Limited (“Naira4Yuan”, “we”, “us”, or “our”), a company incorporated under the laws of Nigeria with offices in [Insert
							Location], Lagos, Nigeria. For any access requests, questions, or inquiries about how we use your Personal Data and our privacy
							practices, please contact us at:
						</p>
						<p className="mb-4">
							<strong>Email:</strong> privacy@naira4yuan.com
						</p>
						<p className="mb-4">
							This Privacy Policy (“Policy”) explains how we collect, use, disclose, and safeguard your Personal Data when you use our website,
							products, services, and applications (collectively, the “Services”). Please also review our Terms of Use, as your use of our Services is
							subject to both this Policy and the Terms of Use. Any undefined terms used in this Policy will have the meanings given to them in the
							Terms of Use.
						</p>
						<p className="mb-4">
							We are constantly working to improve our Services and may update this Policy from time to time. We will notify you of any material
							changes by posting a notice on our website or by sending you an email. Even if you opt out of receiving these notifications, your
							continued use of our Services will be subject to the updated Policy.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Overview</h2>
						<p className="mb-4">
							At Naira4Yuan, we take your privacy seriously. This Policy is designed to provide you with clear information on our privacy practices
							and the measures we take to protect your data. We are committed to ensuring that your rights and privacy are protected in accordance
							with applicable Data Protection Laws.
						</p>
						<p className="mb-4">
							This Policy applies solely to the Services provided by Naira4Yuan Limited and does not extend to any third-party websites or services
							that may be linked from our platform. Please review the privacy policies of any third-party sites you visit.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Our Privacy Principles</h2>
						<p className="mb-4">Naira4Yuan is guided by the following core privacy principles:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Empowerment:</strong> You are in control of your Personal Data, and we encourage you to make informed, voluntary decisions
								about how your data is used.
							</li>
							<li className="mb-2">
								<strong>Responsibility:</strong> We take our responsibility to protect your Personal Data seriously and have implemented appropriate
								security measures.
							</li>
							<li className="mb-2">
								<strong>Transparency:</strong> We will clearly explain what Personal Data we collect, how it is collected, for what purposes, and how
								we secure it.
							</li>
							<li className="mb-2">
								<strong>Accuracy:</strong> We strive to ensure that the Personal Data we collect is accurate and up to date.
							</li>
							<li className="mb-2">
								<strong>Retention:</strong> We only retain Personal Data for as long as necessary to fulfill the purposes for which it was collected,
								including compliance with legal obligations.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Personal Data We May Collect About You</h2>
						<p className="mb-4">We may collect, use, or process the following types of Personal Data:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Identity Data:</strong> Information such as your full name, government-issued identity number, and date of birth. We may also
								collect electronic copies of your passport, driver’s license, or other government-issued identity documents, as well as a photograph
								or video, as needed to verify your identity and comply with regulatory requirements (e.g., Know Your Customer (KYC),
								Know-Your-Business (KYB), and Anti-Money Laundering (AML) laws).
							</li>
							<li className="mb-2">
								<strong>Contact Data:</strong> This includes your country of residence, physical address, email address, contact number, and billing
								details. We use this information to communicate with you and to verify your account and login requests.
							</li>
							<li className="mb-2">
								<strong>Log/Technical Data:</strong> When you access our Services, our servers automatically record details provided by your browser,
								such as IP address, browser type, device information, pages visited, time spent on pages, and other related technical data.
							</li>
							<li className="mb-2">
								<strong>Financial Data:</strong> Information such as your bank account details, card information, and transaction details. This data
								is used for processing payments and facilitating currency exchange transactions.
							</li>
							<li className="mb-2">
								<strong>Transactional Data:</strong> Details related to any transactions you make using our Services, including dates, amounts, and
								associated transaction information.
							</li>
							<li className="mb-2">
								<strong>Marketing and Communications Data:</strong> Records of your preferences regarding receiving marketing communications from us,
								as well as the content and details of any communications you have with us (e.g., call recordings, online chats, email correspondence).
							</li>
						</ul>
						<p className="mb-4">In addition, we may collect non-personal or anonymized data such as statistical or demographic information.</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> How We Collect Your Data</h2>
						<p className="mb-4">We obtain your Personal Data directly from you when you:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">Create or update your account on Naira4Yuan.com.</li>
							<li className="mb-2">Contact our customer support team or otherwise correspond with us.</li>
							<li className="mb-2">Fill in online forms or respond to surveys.</li>
							<li className="mb-2">Engage with our Services for the purpose of currency exchange transactions.</li>
						</ul>
						<p className="mb-4">
							We may also obtain Personal Data about you from third-party sources such as credit bureaus, fraud prevention agencies, identity
							verification providers, analytics services, and publicly available sources.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> The Legal Basis for Processing Your Personal Data</h2>
						<p className="mb-4">We rely on the following legal bases for processing your Personal Data:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Consent:</strong> Where you have provided your explicit consent for us to collect and process your data.
							</li>
							<li className="mb-2">
								<strong>Contractual Necessity:</strong> We require your Personal Data to perform the services you have requested from us.
							</li>
							<li className="mb-2">
								<strong>Legal Obligation:</strong> We are legally required to collect and retain certain Personal Data to comply with applicable laws,
								including anti-fraud, AML, and regulatory requirements.
							</li>
							<li className="mb-2">
								<strong>Legitimate Interest:</strong> In certain instances, and where permitted by law, we may process your Personal Data based on our
								legitimate business interests, such as sharing your data with trusted partners for the purposes of enhancing our services or
								preventing fraud.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> How We May Use Your Personal Data</h2>
						<p className="mb-4">We may use your Personal Data to:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">Create and manage your account, verify your identity, and provide you with our Services.</li>
							<li className="mb-2">Process payments and facilitate currency exchange transactions.</li>
							<li className="mb-2">Protect against and prevent fraud, unauthorized transactions, and other liabilities.</li>
							<li className="mb-2">Communicate with you regarding service updates, regulatory notices, and customer support.</li>
							<li className="mb-2">
								Send you marketing communications, newsletters, offers, and promotions (from which you can opt out at any time).
							</li>
							<li className="mb-2">Analyze and improve our website, products, and Services.</li>
							<li className="mb-2">Comply with applicable laws and regulatory requirements.</li>
							<li className="mb-2">Exercise, establish, or defend our legal rights.</li>
						</ul>
						<p className="mb-4">
							For our mobile applications, we may require additional consent to access your contact list to facilitate seamless fund transfers. You
							may withdraw such consent at any time, although this may limit your ability to use certain features of our Services.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Your Data Protection Rights</h2>
						<p className="mb-4">Under applicable Data Protection Laws, you have the following rights regarding your Personal Data:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Right to be Informed:</strong> You have the right to know how we process your data. This Policy serves to provide that
								information.
							</li>
							<li className="mb-2">
								<strong>Right of Access:</strong> You may request access to or copies of your Personal Data by logging into your account or contacting
								us directly.
							</li>
							<li className="mb-2">
								<strong>Right to Rectification:</strong> If any of your Personal Data is inaccurate or incomplete, you have the right to request that
								we update or correct it.
							</li>
							<li className="mb-2">
								<strong>Right to Erasure:</strong> You may request that we delete your Personal Data, subject to our legal obligations to retain
								certain information.
							</li>
							<li className="mb-2">
								<strong>Right to Object:</strong> You can object to the processing of your Personal Data in certain circumstances.
							</li>
							<li className="mb-2">
								<strong>Right to Withdraw Consent:</strong> If you have provided consent for us to process your Personal Data, you may withdraw that
								consent at any time.
							</li>
							<li className="mb-2">
								<strong>Right to Data Portability:</strong> You have the right to request that we transfer your Personal Data to another service
								provider in a structured, commonly used, and machine-readable format.
							</li>
						</ul>
						<p className="mb-4">
							If you wish to exercise any of these rights, please contact us at privacy@naira4yuan.com. We may require proof of your identity before
							processing your request. In cases where a third party is acting on your behalf, we will require sufficient evidence of authorization.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Disclosing Your Personal Data</h2>
						<p className="mb-4">We may disclose or share your Personal Data with third parties under the following circumstances:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Service Providers and Partners:</strong> We may share your data with trusted partners, service providers, or financial
								institutions who assist us in operating our Services, such as for identity verification, fraud prevention, customer support,
								analytics, and payment processing. These third parties are required to maintain the confidentiality and security of your data and are
								only permitted to process your data in accordance with our instructions.
							</li>
							<li className="mb-2">
								<strong>Legal Compliance:</strong> We may disclose your Personal Data if required to do so by law, or in response to a subpoena, court
								order, summons, or other legal process.
							</li>
							<li className="mb-2">
								<strong>Business Transfers:</strong> If Naira4Yuan Limited is involved in a merger, acquisition, or asset sale, your Personal Data may
								be transferred as part of that transaction. In such cases, the acquiring entity will be bound by this Privacy Policy or a revised
								version thereof.
							</li>
							<li className="mb-2">
								<strong>Protection of Rights:</strong> We may disclose your Personal Data to protect against fraud, security breaches, or to protect
								the rights, property, or safety of Naira4Yuan, our users, or the public.
							</li>
						</ul>
						<p className="mb-4">Your Personal Data will only be disclosed to third parties in accordance with applicable Data Protection Laws.</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Data Security</h2>
						<p className="mb-4">
							We implement a range of physical, technical, organizational, and administrative measures designed to protect your Personal Data from
							unauthorized access, use, or disclosure. These measures include secure servers, encryption, firewalls, and restricted access to personal
							data on a need-to-know basis.
						</p>
						<p className="mb-4">
							However, please be aware that no method of transmitting or storing data is completely secure, and we cannot guarantee the absolute
							security of your Personal Data.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Data Retention</h2>
						<p className="mb-4">
							We retain your Personal Data for as long as necessary to fulfill the purposes for which it was collected, including compliance with
							legal obligations, dispute resolution, and enforcement of our agreements. Specific retention periods vary depending on the type of data
							and the purposes for which it was collected. Once your data is no longer required, we will securely delete or anonymize it, unless
							otherwise required by law.
						</p>
						<p className="mb-4">For example:</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">Your account information and credentials will be retained as long as you maintain an active account with us.</li>
							<li className="mb-2">
								Payment and transaction data will be retained as necessary for processing your transactions and meeting regulatory requirements.
							</li>
							<li className="mb-2">Log and technical data may be kept for monitoring and improving the performance and security of our Services.</li>
						</ul>
						<p className="mb-4">If you choose to close your account, we will continue to retain certain data to comply with our legal obligations.</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Marketing</h2>
						<p className="mb-4">
							With your consent, we may use your Personal Data to send you marketing communications about our products, services, and promotions. You
							can opt out of receiving marketing materials at any time by adjusting your notification preferences in your account settings or using
							the unsubscribe link in our emails. Please note that opting out of marketing communications will not affect transactional or
							service-related communications.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Cookies</h2>
						<p className="mb-4">
							Our Services use cookies and similar technologies (such as pixel tags, web beacons, and JavaScript) to enhance your browsing experience,
							analyze usage trends, and improve our Services. Cookies are small data files that are stored on your computer or mobile device when you
							visit our website. We may also receive information from third parties that use cookies on our behalf.
						</p>
						<p className="mb-4">
							You can control or disable cookies through your browser settings, but doing so may limit your ability to use certain features of our
							Services.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Minors</h2>
						<p className="mb-4">
							Our Services are not directed at individuals under the age of 18, and we do not knowingly collect Personal Data from minors. If you
							believe that we have inadvertently collected data from a minor, please contact us immediately so that we can take the necessary steps to
							delete the information.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> International Data Transfers</h2>
						<p className="mb-4">
							Naira4Yuan Limited operates globally, and your Personal Data may be transferred to and maintained on servers located outside your
							country of residence. When we transfer your Personal Data internationally, we will take reasonable steps to ensure that your data is
							handled securely and in compliance with applicable Data Protection Laws. Such measures may include verifying that the destination
							country provides an adequate level of data protection or implementing appropriate safeguards such as standard contractual clauses.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Updates to Our Privacy Policy</h2>
						<p className="mb-4">
							We may update or amend this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or
							regulatory reasons. When significant changes are made, we will notify you by posting a notice on our website, within your Naira4Yuan
							account, or via email. Your continued use of our Services following any changes constitutes your acceptance of the updated Policy. 17.
							Contact Us If you have any questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact our Data
							Protection Officer (DPO) at: Email: privacy@naira4yuan.comAddress: [Insert Address], Lagos, Nigeria We will make every effort to respond
							to your inquiries within thirty (30) days or in accordance with applicable Data Protection Laws. If you are not satisfied with our
							response, you may contact the Nigerian Data Protection Commission.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Definitions</h2>
						<p className="mb-4">
							<ul className="list-disc pl-8 mb-4 text-gray-700">
								<li className="mb-2">
									<strong>Account:</strong> A profile created by a User on any Naira4Yuan platform or product.
								</li>
								<li className="mb-2">
									<strong>Cookies:</strong> Small data files that are transferred to your computer or mobile device to help us remember your login
									information, track usage, and gather statistical information.
								</li>
								<li className="mb-2">
									<strong>Data Protection Laws:</strong> The Nigeria Data Protection Act 2023, Nigeria Data Protection Regulation 2019, and any other
									applicable legislation governing the protection of personal data in Nigeria.
								</li>
								<li className="mb-2">
									<strong>Personal Data:</strong> Any information that can be used to identify a living or natural person, including but not limited
									to your name, email address, date of birth, telephone number, physical address, financial information (e.g., bank account or card
									details), government-issued identity credentials, and any other data that is linked to your identity (e.g., IP address, login
									information, or device information).
								</li>
								<li className="mb-2">
									<strong>Services:</strong> Any products, applications, features, websites, tools, software, or other services offered by Naira4Yuan
									Limited.
								</li>
								<li className="mb-2">
									<strong>Sites:</strong> Refers to any platform, including websites, mobile applications, and social media platforms, associated with
									Naira4Yuan Limited.
								</li>
								<li className="mb-2">
									<strong>User:</strong> Any individual or entity (e.g., a merchant) that uses the Services or accesses the Sites, and has agreed to
									abide by the terms of our Services and this Privacy Policy.
								</li>
							</ul>
							By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms
						</p>
					</div>
				</div>
			</section>
			<Containment />
		</div>
	);
}
