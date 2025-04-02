import React from "react";
import { notificationsArray } from "@/data/dataArray";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";
import { Link } from "react-router";

export const NotificationIndex = () => {
	return (
		<div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto">
			<header>
				<h2 className="text-2xl font-bold">Notifications</h2>
			</header>
			<section className="flex flex-col gap-y-2">
				<ul className="space-y-4">
					{notificationsArray.map((option) => (
						<Link to={option.link} key={option.id} className="flex items-center justify-between">
							<div className="flex items-center gap-3 flex-grow">
								<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
									{React.createElement(option.icon, { className: "w-5 h-5" })}
								</IconWrapper>
								<div>
									<h3 className="text-lg font-medium">{option.title}</h3>
									<p className="text-gray-500 text-sm">{option.description}</p>
								</div>
							</div>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</Link>
					))}
				</ul>
			</section>
		</div>
	);
};
