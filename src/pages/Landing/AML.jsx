import React from "react";
import { CompanyImageStacks } from "../../components/LayoutComponents/UserStack";
import { Containment } from "./Containment";
import LandingPageHeader from "../../Layouts/Landing/Header";
import { HeroSection } from "../../components/PageComponents/Landing/HeroSection";
import { cutGreenPlus, display1, display2, whiteCircle } from "../../data";

export default function AML() {
	return (
		<div className="v-layer-wrapper !bg-[var(--common-faint-bg)]">
			<section className="v-each-section relative has-bg" id="v-hero">
				<LandingPageHeader />
				<div className="v-hero-inner w-full lg:w-11/12 xl:w-9/12 mx-auto relative pb-8 lg:pb-14">
					<HeroSection pageTitle="AML Policy: Make payment to China from Nigeria Easily." />
				</div>
			</section>
			<section className="px-4 xl:w-10/12 mx-auto w-full flex flex-col gap-y-8 mt-14">
				<CompanyImageStacks />
				<div className="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-8 mb-14 flex flex-col gap-y-8">
					<div className="aml-container py-8">
						<h1 className="text-2xl font-bold">Anti-Money Laundering (AML) Policy</h1>
						<p className="text-sm font-semibold text-gray-600 mb-3">Naira4Yuan Limited | Last Updated: [Insert Date]</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Policy Statement and Purpose</h2>
						<p className="mb-4">
							At Naira4Yuan Limited, we are committed to preventing and detecting money laundering, terrorist financing, and any other forms of
							financial crime. This AML Policy establishes the framework and guidelines that enable us to comply with all applicable Nigerian and
							international anti-money laundering regulations. Our goal is to protect our business, our customers, and the financial system from
							exploitation by illicit actors.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Scope</h2>
						<p className="mb-4">
							This policy applies to all employees, officers, directors, and agents of Naira4Yuan Limited, as well as any third-party service
							providers acting on our behalf. It governs all aspects of our currency exchange services from Nigerian Naira (NGN) to Chinese Yuan (RMB)
							and covers all transactions, customer interactions, and related activities.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Definitions</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Money Laundering:</strong> The process of concealing the origins of money obtained from illicit activities by converting it
								into ostensibly legitimate assets or funds.
							</li>
							<li className="mb-2">
								<strong>Terrorist Financing:</strong> The provision of funds or financial support for terrorist activities.
							</li>
							<li className="mb-2">
								<strong>Customer Due Diligence (CDD):</strong> Procedures to verify the identity of our customers using reliable, independent source
								documents and information.
							</li>
							<li className="mb-2">
								<strong>Enhanced Due Diligence (EDD):</strong> Additional measures applied to customers or transactions that present a higher risk of
								money laundering or terrorist financing.
							</li>
							<li className="mb-2">
								<strong>Suspicious Transaction Report (STR):</strong> A report filed with regulatory authorities when a transaction appears unusual or
								indicative of potential money laundering or terrorist financing.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Roles and Responsibilities</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Board Directors and Senior Management:</strong> Ensure that effective AML controls are in place, provide adequate resources,
								and set the tone for a culture of compliance throughout the organization.
							</li>
							<li className="mb-2">
								<strong>Compliance Officers:</strong>
								<ul className="list-disc pl-8 mt-2">
									<li>Develop, implement, and oversee the AML program.</li>
									<li>Monitor transactions and customer activities for suspicious behavior.</li>
									<li>Ensure timely filing of Suspicious Transaction Reports (STRs) to the appropriate regulatory bodies.</li>
									<li>Serve as the point of contact for AML-related queries and training.</li>
								</ul>
							</li>
							<li className="mb-2">
								<strong>Employees:</strong>
								<ul className="list-disc pl-8 mt-2">
									<li>Adhere to this AML Policy in all business dealings.</li>
									<li>Complete mandatory AML training sessions.</li>
									<li>Report any suspicious activities or transactions promptly to the Compliance Officer.</li>
								</ul>
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Customer Due Diligence (CDD) and Know Your Customer (KYC)</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Verification:</strong> Before establishing a business relationship, we verify the identity of each customer using
								government-issued identification and other reliable documentation as required by law.
							</li>
							<li className="mb-2">
								<strong>Risk Assessment:</strong> Conduct risk assessments for each customer to determine the appropriate level of due diligence.
								Customers deemed higher risk will undergo Enhanced Due Diligence (EDD), which may include additional verification steps and ongoing
								monitoring.
							</li>
							<li className="mb-2">
								<strong>Ongoing Monitoring:</strong> We continuously monitor customer transactions to ensure they are consistent with their known
								profile and business activities. Any deviations will trigger further investigation and may result in the filing of an STR.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Transaction Monitoring and Reporting</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Monitoring:</strong> All transactions are monitored for signs of suspicious activity. This includes reviewing transaction
								patterns and measuring them against customer profiles.
							</li>
							<li className="mb-2">
								<strong>Reporting Suspicious Activity:</strong> If any transaction or behavior appears inconsistent with a customer’s established risk
								profile or raises suspicion of money laundering or terrorist financing, employees must immediately report these observations to the
								Compliance Officer.
							</li>
							<li className="mb-2">
								<strong>Filing of STRs:</strong> Upon confirmation of suspicious activity, the Compliance Officer is responsible for preparing and
								submitting a Suspicious Transaction Report (STR) to the appropriate regulatory authorities in accordance with Nigerian AML
								regulations.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Record Keeping</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Documentation:</strong> All records related to customer identification, transactions, due diligence, and suspicious activity
								reporting must be maintained securely.
							</li>
							<li className="mb-2">
								<strong>Retention Period:</strong> These records shall be retained for a minimum of five (5) years, or as otherwise required by
								applicable law, and must be readily retrievable for audits or investigations.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Risk Assessment</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Regular Reviews:</strong> We perform periodic risk assessments to identify, assess, and mitigate money laundering and
								terrorist financing risks. Factors considered include customer types, transaction volumes, geographic risks, and product or service
								offerings.
							</li>
							<li className="mb-2">
								<strong>Risk-Based Approach:</strong> Our AML procedures are applied on a risk basis, meaning that higher-risk scenarios warrant
								enhanced scrutiny and additional due diligence measures.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Training and Awareness</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Mandatory Training:</strong> All relevant employees and agents will receive comprehensive AML training at the time of hire and
								at regular intervals thereafter to ensure they are aware of their legal obligations and the latest regulatory developments.
							</li>
							<li className="mb-2">
								<strong>Ongoing Awareness:</strong> Continuous education and updates will be provided to reinforce the importance of compliance and to
								inform staff about emerging risks and trends in money laundering and terrorist financing.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Internal Controls and Compliance</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Internal Controls:</strong> Naira4Yuan Limited has implemented robust internal controls designed to detect and prevent money
								laundering activities. This includes the segregation of duties, regular internal audits, and clear reporting channels.
							</li>
							<li className="mb-2">
								<strong>Independent Audit:</strong> An independent audit of our AML program will be conducted periodically to assess the effectiveness
								of our controls and procedures. Any recommendations arising from such audits will be promptly implemented.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Sanctions and Enforcement</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Disciplinary Measures:</strong> Any employee found to be in violation of this AML Policy may face disciplinary action, up to
								and including termination of employment and legal proceedings.
							</li>
							<li className="mb-2">
								<strong>Regulatory Consequences:</strong> Non-compliance with AML regulations can result in significant fines, legal action, and
								reputational damage. Therefore, strict adherence to this policy is mandatory for all staff.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Policy Review and Updates</h2>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Regular Reviews:</strong> This AML Policy will be reviewed at least annually, or more frequently if necessary, to ensure its
								ongoing effectiveness and compliance with new laws or regulatory guidelines.
							</li>
							<li className="mb-2">
								<strong>Communication of Changes:</strong> Any material changes to this policy will be communicated to all employees and relevant
								stakeholders, and updated copies will be made available on our internal systems and, where appropriate, on our website.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Contact Information</h2>
						<p className="mb-4">
							For any questions or clarifications regarding this AML Policy, or to report any suspicious activity, please contact our Compliance
							Officer at:
						</p>
						<ul className="list-disc pl-8 mb-4">
							<li className="mb-2">
								<strong>Email:</strong> compliance@naira4yuan.com
							</li>
							<li className="mb-2">
								<strong>Address:</strong> [Insert Office Address], Lagos, Nigeria
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-4"> Conclusion</h2>
						<p className="mb-4">
							Naira4Yuan Limited is committed to maintaining a strong anti-money laundering framework. All employees and associated parties are
							expected to fully comply with this policy to help safeguard our business and the broader financial system from exploitation by illicit
							actors. By adhering to the guidelines outlined above, we work together to combat money laundering and terrorist financing, ensuring the
							integrity of our services and the protection of our customers.
						</p>
						<p className="mb-4">
							This Policy is an integral part of our overall compliance program. All employees and agents are required to read, understand, and adhere
							to its provisions.
						</p>
					</div>
				</div>
			</section>
			<Containment />
		</div>
	);
}
