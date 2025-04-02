import React from "react";
import { LogoFullDarkVariant } from "../../data";
import { UsersStack } from "../../components/LayoutComponents/UserStack";
import { Link } from "react-router";
import { CurrentYear } from "../../lib/functions";
import { BlogSupportLinks, CompanyLinks, ProductLinks, SocialLinks, supportLinks } from "../../data/dataArray";
import { IconWrapper } from "../../data/Icons";

export const LandingPageFooter = () => {
	return (
		<footer className="v-footer-main rounded-lg" id="v-footer">
			<div className="v-footer-inner w-full xs:w-11/12 xl:w-9/12 mx-auto px-5">
				<section className="v-main-footer w-full mx-auto relative px-3 md:px-0 pb-4 sm:pb-5 v-footer-navigations">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 m-0 sm:gap-x-5 xl:gap-x-8 items-start gap-y-6 sm:gap-y-4">
						<div className="w-full col-span-full xl:col-span-1">
							<Link to="" className="flex items-center justify-start">
								<figure className="v-footer-logo">
									<img src={LogoFullDarkVariant} alt="" className="img-fluid" />
								</figure>
							</Link>
						</div>
						<div className="w-full v-each-nav lg:col-span-1">
							<h6 className="v-title font-semibold">Blog & Support</h6>
							<ul className="v-each-nav-wrap">
								{BlogSupportLinks.map((link, index) => (
									<li key={index} className={`v-each-nav-link`}>
										<Link to={link.path} className="v-link">
											<span className="v-text">{link.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="w-full v-each-nav lg:col-span-1">
							<h6 className="v-title font-semibold">Products</h6>
							<ul className="v-each-nav-wrap">
								{ProductLinks.map((link, index) => (
									<li key={index} className={`v-each-nav-link`}>
										<Link to={link.path} className="v-link">
											<span className="v-text">{link.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="w-full v-each-nav lg:col-span-1">
							<h6 className="v-title font-semibold">Company</h6>
							<ul className="v-each-nav-wrap">
								{CompanyLinks.map((link, index) => (
									<li key={index} className={`v-each-nav-link`}>
										<Link to={link.path} className="v-link">
											<span className="v-text">{link.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="w-full col-span-full md:col-span-1 xl:col-span-2">
							<div className="flex flex-col items-start md:items-end gap-y-2 md:text-end text-start">
								<ul className="v-social-links flex items-center flex-nowrap gap-x-3">
									{SocialLinks.map((eachLink, index) => (
										<li className="v-social" key={index} title={eachLink.name}>
											<Link to={eachLink.link} target="_blank" className="text-slate-700">
												<IconWrapper>{React.createElement(eachLink.icon, { className: "w-5 h-5" })}</IconWrapper>
											</Link>
										</li>
									))}
								</ul>
								<ul className="v-mails">
									{supportLinks.map((link, index) => (
										<li key={index} className={`v-each-main last:mt-4`}>
											<Link to={link.href} className="v-each-mail sm:text-nowrap">
												<span className="v-text">{link.text}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
				<div className="py-6 px-3 md:px-0 relative">
					<div className="flex justify-between flex-col-reverse md:flex-row items-start m-0 gap-y-8 gap-x-2">
						<div className="v-text-content flex flex-col gap-y-4 mb-4 p-0 md:w-7/12">
							<span className="v-text" style={{ color: "var(--footer-link-clr)", fontSize: "0.9rem", lineHeight: "1.6", textAlign: "justify" }}>
								&copy; {CurrentYear()} Naira4yuan. <br /> <b>Disclaimer:</b> All transactions are subject to exchange rate fluctuations and applicable
								regulations. We endeavor to provide accurate, up-to-date information; however, we do not guarantee or assume any liability for errors,
								delays, or losses arising from the use of our services. Users are solely responsible for complying with all local laws and
								regulations. For full details, please review our Terms & Conditions.
								<br />
								<br />
								&copy; 2024 Load Africa. All Rights Reserved. Unauthorized use or reproduction of any content, design, or materials is strictly
								prohibited.
								<br />
								<br />
								<span className="flex flex-col font-semibold leading-tight">
									<span>{CurrentYear()} Naira4yuan. </span>
									<small>All rights reserved.</small>
								</span>
							</span>
						</div>
						<div className="p-0 col-md-4">
							<div className="flex flex-col mx-auto items-start md:items-end md:justify-end justify-start mt-3 mt-md-0 flex-wrap gap-x-3 gap-y-2">
								<UsersStack />
								<div className="flex flex-col items-start md:items-end">
									<div className="flex items-center gap-x-2">
										<h4 className="v-rate-int text-2xl" style={{ color: "var(--primary-clr)" }}>
											<b>4.8</b>
										</h4>
										<ul className="v-list-rate-stars flex items-center">
											<li className="v-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
													<rect width="128" height="128" fill="none" />
													<path
														fill="#fdd835"
														d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
													/>
													<path
														fill="#ffff8d"
														d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
													/>
													<path
														fill="#f4b400"
														d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
													/>
												</svg>
											</li>
											<li className="v-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
													<rect width="128" height="128" fill="none" />
													<path
														fill="#fdd835"
														d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
													/>
													<path
														fill="#ffff8d"
														d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
													/>
													<path
														fill="#f4b400"
														d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
													/>
												</svg>
											</li>
											<li className="v-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
													<rect width="128" height="128" fill="none" />
													<path
														fill="#fdd835"
														d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
													/>
													<path
														fill="#ffff8d"
														d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
													/>
													<path
														fill="#f4b400"
														d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
													/>
												</svg>
											</li>
											<li className="v-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
													<rect width="128" height="128" fill="none" />
													<path
														fill="#fdd835"
														d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
													/>
													<path
														fill="#ffff8d"
														d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
													/>
													<path
														fill="#f4b400"
														d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
													/>
												</svg>
											</li>
											<li className="v-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
													<rect width="128" height="128" fill="none" />
													<path
														fill="#fdd835"
														d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
													/>
													<path
														fill="#ffff8d"
														d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
													/>
													<path
														fill="#f4b400"
														d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
													/>
												</svg>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
