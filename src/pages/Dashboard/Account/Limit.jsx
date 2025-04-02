import React from "react";
import { RadioInput } from "../../../components/BaseComponents/FormInputs";
import { FooterButton } from "../../../components/BaseComponents/FooterButton";

const tiers = [
	{
		name: "Tier 1: Basic Account",
		incomingDaily: "#1000 - #10,000",
		outgoingDaily: "¥1 - ¥500",
		incomingMonthly: "#100,000",
		outgoingMonthly: "¥5,000",
	},
	{
		name: "Tier 2: Individual Account",
		incomingDaily: "#10,000 - #1,000,000",
		outgoingDaily: "¥50 - ¥5,000",
		incomingMonthly: "#10,000,000",
		outgoingMonthly: "¥50,000",
	},
	{
		name: "Tier 3: Business Account",
		incomingDaily: "#10,000 - #5,000,000",
		outgoingDaily: "¥50 - ¥10,000",
		incomingMonthly: "#50,000,000",
		outgoingMonthly: "¥100,000",
	},
];

export const Limit = () => {
	const [selectedLimitLevel, setSelectedLimitLevel] = React.useState(0);

	const activeListStyle = `text-white`;
	const generalListsStyle = `text-[.9rem] list-disc opacity-90`;
	const inactiveListStyle = `text-black`;

	return (
		<div className="mb-14 max-w-3xl mx-auto">
			<header>
				<h2 className="text-2xl font-bold">Limits</h2>
			</header>
			<section className="my-8 flex flex-col gap-y-4">
				{tiers.map((tier, index) => (
					<div
						role="button"
						onClick={() => setSelectedLimitLevel(index)}
						key={index}
						className={`w-full ${
							selectedLimitLevel === index ? "text-white bg-main" : "bg-slate-200 text-black"
						} p-4 rounded-lg cursor-pointer transition-all ease-in-out duration-300`}>
						<header>
							<RadioInput
								checked={selectedLimitLevel === index}
								onChange={() => {}}
								className="checked:accent-amber-200 !w-3.5 !h-3.5 transition-all ease-in-out duration-300"
							/>
						</header>
						<main>
							{selectedLimitLevel === index && <h2 className="text-lg font-medium">Your level</h2>}
							<div>
								<h2 className="text-lg font-medium">{`${tier.name}`}</h2>
								<ul className="pl-4 flex flex-col gap-y-1 mt-1">
									<li className={`${selectedLimitLevel === index ? activeListStyle : inactiveListStyle} ${generalListsStyle}`}>
										Daily Incoming Transactions: {tier.incomingDaily}
									</li>
									<li className={`${selectedLimitLevel === index ? activeListStyle : inactiveListStyle} ${generalListsStyle}`}>
										Daily Outgoing Transactions: {tier.outgoingDaily}
									</li>
									<li className={`${selectedLimitLevel === index ? activeListStyle : inactiveListStyle} ${generalListsStyle}`}>
										Total Monthly Incoming Limit:{tier.incomingMonthly}
									</li>
									<li className={`${selectedLimitLevel === index ? activeListStyle : inactiveListStyle} ${generalListsStyle}`}>
										Total Monthly Outgoing Limit:{tier.outgoingMonthly}
									</li>
								</ul>
							</div>
						</main>
					</div>
				))}
				<FooterButton className="!text-base uppercase animate-active" text="upgrade" />
			</section>
		</div>
	);
};
