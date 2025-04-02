import React from "react";
import { Link } from "react-router";
import { appstore, PhoneImage, playstore } from "@/data";
import { UsersStack } from "../../LayoutComponents/UserStack";
import { routes } from "@/data/routes";
import { ArrowBottomRightIcon, IconWrapper } from "@/data/Icons";
import { naira4yuanResources } from "@/data/dataArray";

export const PreFooter = () => {
	return (
		<>
			<section id="v-cards">
				<div className="pt-16 flex flex-col gap-y-14">
					<div className="w-full sm:w-11/12 xl:w-10/12 mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-10/12 mx-auto m-0 items-start gap-y-10">
							{naira4yuanResources.map((resource, index) => (
								<div key={index} className="flex items-start md:items-center space-x-6 h-full">
									<IconWrapper className="bg-white rounded-2xl p-6 shadow-md">
										{React.createElement(resource.icon, { className: "w-5 h-5 text-slate-800" })}
									</IconWrapper>
									<div className="flex flex-col h-full">
										<h6 className="font-semibold text-lg text-gray-900">{resource.title}</h6>
										<p className="text-[.9rem] text-gray-800 flex-grow">{resource.description}</p>
										<Link to={resource.link} className="flex items-center space-x-2 mt-4 text-black hover:underline">
											<IconWrapper>
												<ArrowBottomRightIcon />
											</IconWrapper>
											<span className="font-medium">{resource.linkText}</span>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full sm:w-11/12 xl:w-10/12 mx-auto">
						<div className="w-full flex col-12 m-0 items-center mt-5 pt-4 v-3csinds834f flex-col-reverse md:flex-row gap-y-5">
							<div className="lg:w-6/12 md:w-1/2 flex items-center justify-center">
								<figure className="v-phone-image mx-auto" role="presentation">
									<img src={PhoneImage} alt="" className="img-fluid" />
								</figure>
							</div>
							<div className="lg:w-6/12 md:w-1/2">
								<div className="mb-4 flex flex-col items-center md:items-start text-center md:text-start gap-y-3">
									<UsersStack />
									<h3 className="text-2xl md:text-3xl text-balance">
										<b>
											Join 10k+ people on our mobile <br /> app waitlist.
										</b>
									</h3>
									<Link to={routes.WAITLIST} className="font-semibold bg-white text-black rounded-lg py-3 px-5 shadow-sm capitalize">
										Join Waitlist here
									</Link>
									<div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start mt-2">
										<Link to={routes} className="v-store-link">
											<figure className="v-store-link-image" title="Playstore" style={{ "--max-w": "7rem" }}>
												<img src={playstore} alt="google play logo" className="img-fluid" />
											</figure>
										</Link>
										<Link to={routes} className="v-store-link">
											<figure className="v-store-link-image" title="Appstore" style={{ "--max-w": "7rem" }}>
												<img src={appstore} alt="appstore logo" className="img-fluid" />
											</figure>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
