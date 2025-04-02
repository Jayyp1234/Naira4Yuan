import React from "react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "../../ui/dropdown-menu";
import { BookIcon, IconWrapper } from "@/data/Icons";
import { landingPageHeaderCompanyLinkArray } from "../../../data/dataArray";
import { Link } from "react-router";

export const HowItWorksDropdownContent = () => {
	return (
		<>
			<DropdownMenuContent className="md:min-w-80 flex flex-col gap-y-5 md:max-w-sm w-full rounded-3xl p-4 rounded-tl-md">
				<section>
					<DropdownMenuLabel>
						<h2 className="underline text-2xl font-bold">How it works</h2>
					</DropdownMenuLabel>
					<div className="mt-2 flex flex-col gap-y-2">
						{articleArray.map((item, index) => (
							<DropdownMenuItem key={index} className="flex items-center gap-x-4">
								<IconWrapper className="rounded-sm p-2 text-slate-800" style={{ backgroundColor: item.iconBg }}>
									{item.icon}
								</IconWrapper>
								<span className="text-[.96rem]">{item.text}</span>
							</DropdownMenuItem>
						))}
					</div>
				</section>
				<section>
					<DropdownMenuLabel>
						<h2 className="underline text-2xl font-bold">Help desk</h2>
					</DropdownMenuLabel>
					<div className="mt-2 min-h-64 flex flex-col gap-y-2">
						{helpdeskArray.map((item, index) => (
							<DropdownMenuItem key={index} className="flex items-center gap-x-4">
								<IconWrapper className="rounded-sm p-2 text-slate-800" style={{ backgroundColor: item.iconBg }}>
									{item.icon}
								</IconWrapper>
								<span className="text-[.96rem]">{item.text}</span>
							</DropdownMenuItem>
						))}
					</div>
				</section>
			</DropdownMenuContent>
		</>
	);
};

export const FeaturesDropdownContent = () => {
	return (
		<>
			<DropdownMenuContent className="md:min-w-80 md:max-w-sm w-full rounded-3xl p-4 rounded-tl-md">
				<DropdownMenuLabel>
					<h2 className="underline text-2xl font-bold">Use Cases</h2>
				</DropdownMenuLabel>
				<div className="mt-3 min-h-64 flex flex-col gap-y-2">
					{useCases.map((item, index) => (
						<DropdownMenuItem key={index} className="flex items-center gap-x-4">
							<IconWrapper className="rounded-sm p-2 text-slate-800" style={{ backgroundColor: item.iconBg }}>
								{item.icon}
							</IconWrapper>
							<span className="text-[.96rem]">{item.text}</span>
						</DropdownMenuItem>
					))}
				</div>
			</DropdownMenuContent>
		</>
	);
};

export const CompanyDropdownComponent = () => {
	return (
		<>
			<div className="flex flex-col gap-y-0.5">
				{landingPageHeaderCompanyLinkArray.map((item, index) => {
					return (
						<Link to={item.link} className="hover:bg-slate-200 py-2 px-3 rounded-lg" key={index}>
							{item.label}
						</Link>
					);
				})}
			</div>
		</>
	);
};

export const articleArray = [
	{
		iconBg: "#DFFFE8",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "Transfer money to Chinese’s Alipay, Wechat or Bank Account from Nigeria",
	},
	{
		iconBg: "#FFDEFC",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "Other Medium Articles",
	},
];

export const helpdeskArray = [
	{
		iconBg: "#DFFFE8",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "Step by step instruction on how to use Naira4yuan",
	},
	{
		iconBg: "#FFDEFC",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "How to deposit Naira on Naira4yuan",
	},
	{
		iconBg: "#DBF2FB",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "How to know when transaction is complete and download payment receipt.",
	},
	{
		iconBg: "#DBF2FB",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "Other How to instructions",
	},
];

export const useCases = [
	{
		iconBg: "#DFFFE8",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "Pay Chinese Supplier in Yuan with Naira on Alipay",
	},
	{
		iconBg: "#FFDEFC",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "Pay Chinese Supplier in Yuan with Naira on Wechat",
	},
	{
		iconBg: "#DBF2FB",
		icon: <BookIcon className="min-w-5 min-h-5" />,
		text: "Pay Chinese Supplier in Yuan with Naira on Chinese Bank Account (coming) ",
	},
];
