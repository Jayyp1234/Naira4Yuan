import React from "react";
import { CompanyImageStacks } from "../../LayoutComponents/UserStack";
import { bluePlus, greenPlus, ImageCompany1, ImageCompany2, ImageCompany3, ScanCodeImage, whiteStar } from "@/data";
import { depositArray } from "@/data/dataArray";
import { ArrowDownIcon, DownloadIcon, IconWrapper } from "@/data/Icons";
import { Xchange } from "../../LayoutComponents/Xchange";
import { FormControl, RadioInput } from "../../BaseComponents/FormInputs";
import { BorderWrapper } from "../Dashboard/Items";

export const PostHero = () => {
	return (
		<>
			<CompanyImageStacks />
			<div className="mt-8 mb-14">
				<header className="flex flex-col w-11/12 mx-auto text-center gap-y-2">
					<h2 className="text-3xl font-extrabold text-center sm:text-4xl">How Naira4yuan Works</h2>
					<span>The system is fully automated, ensuring instant crediting of fiat accounts without the need for human intervention.</span>
				</header>
				<div className="flex flex-wrap items-stretch justify-center w-full gap-8 mt-8 xl:flex-nowrap">
					<aside className="bg-main w-full sm:w-[47%] xl:w-1/3 rounded-3xl rounded-tl-sm rounded-bl-sm p-8 relative">
						<figure className="absolute right-0 pointer-events-none select-none -top-4">
							<img src={whiteStar} alt="" />
						</figure>
						<div className="relative flex flex-col h-full gap-y-4">
							<header>
								<h2 className="text-4xl text-balance font-bold text-[#0DFF7A]">Fund your Naira wallet 🚀</h2>
							</header>
							<div className="flex-grow">
								<span className="block text-justify text-white">
									Start by funding your Naira4yuan wallet by transferring Naira from your Naira bank account to your dedicated account on Naira4yuan.
								</span>
							</div>
							<footer className="flex flex-col mt-12 gap-y-2 min-h-56">
								{depositArray.map((deposit, index) => (
									<div key={index} className="flex items-center justify-between bg-white/30 p-3.5 rounded-2xl">
										<div className="flex items-center space-x-4">
											<IconWrapper className="p-2 bg-white rounded-full">
												<ArrowDownIcon />
											</IconWrapper>
											<div className="text-white">
												<h6 className="font-semibold">{deposit.type}</h6>
												<p className="text-sm">{deposit.description}</p>
											</div>
										</div>
										<span className="px-3 py-1 text-sm text-black bg-gray-100 rounded">{deposit.amount}</span>
									</div>
								))}
							</footer>
						</div>
					</aside>
					<aside className="bg-white w-full md:w-[48%] xl:w-1/3 rounded-3xl p-8 relative">
						<figure className="absolute pointer-events-none select-none -top-4 left-4">
							<img src={bluePlus} alt="" className="h-auto max-w-full" />
						</figure>
						<div className="relative flex flex-col h-full gap-y-4">
							<header>
								<h2 className="text-4xl text-balance font-bold text-[#10B259]">Get Updates in Real Time</h2>
							</header>
							<div className="flex-grow">
								<span className="text-justify">
									For us, transparency is paramount. We’ll keep you notified at every step as your money moves, and you can easily download or share
									the transaction receipt with your Chinese counterpart.
								</span>
							</div>
						</div>
					</aside>
					<aside className="bg-white w-full md:w-[48%] xl:w-1/3 rounded-3xl p-8 relative">
						<figure className="absolute rotate-45 pointer-events-none select-none top-4 right-4">
							<img src={greenPlus} alt="" className="h-auto max-w-full" />
						</figure>
						<div className="relative flex flex-col h-full gap-y-4">
							<header>
								<h2 className="text-4xl text-balance font-bold text-[#10B259]">Send Yuan to Alipay account</h2>
							</header>
							<div className="flex-grow">
								<span className="text-justify">
									Enter the Alipay account you want to fund, get the present exchange rate and proceed to send chinese yuan.
								</span>
							</div>
							<footer className="mt-12 min-h-56">
								<Xchange />
							</footer>
						</div>
					</aside>
				</div>
			</div>
		</>
	);
};

export const ThreeAsides = () => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState("alipay");

	const paymentMethods = [
		{ id: "alipay", label: "Alipay", logo: ImageCompany1 },
		{ id: "wechat", label: "WeChat", logo: ImageCompany2 },
		{ id: "bank-transfer", label: "Bank Transfer", logo: ImageCompany3 },
	];

	const handleChange = (e) => {
		setSelectedPaymentMethod(e.target.value);
	};

	return (
		<div className="flex flex-wrap justify-center gap-y-5 lg:grid lg:grid-cols-6 gap-x-2">
			<aside className="w-full sm:w-[48%] sm:order-1 lg:w-full lg:col-span-2 flex flex-col rounded-2xl overflow-hidden shadow">
				<div className="px-5 py-3 bg-[#F5F5DC]">
					<span className="font-medium">Naira to Yuan</span>
				</div>
				<div className="flex flex-col flex-grow p-4 bg-white gap-y-7">
					<Xchange />
					<button type="button" className="bg-main py-3.5 text-white w-full rounded-lg rounded-tl-none">
						Continue
					</button>
				</div>
			</aside>
			<aside className="flex items-start justify-center w-full mx-auto lg:w-max sm:order-3 md:order-2 lg:col-span-2">
				<figure className="shadow rounded-3xl">
					<img src={ScanCodeImage} alt="" className="h-auto max-w-full" />
				</figure>
			</aside>
			<aside className="w-full sm:w-[48%] sm:order-2 md:order-3 lg:w-full lg:col-span-2 flex flex-col rounded-2xl overflow-hidden shadow">
				<div className="px-5 py-3 bg-[#F5F5DC]">
					<span className="font-medium">Add a new recipient</span>
				</div>
				<div className="flex flex-col flex-grow p-5 bg-white gap-y-4">
					<div className="flex flex-col flex-grow gap-y-3">
						<div className="grid grid-cols-3 gap-2">
							{paymentMethods.map((method) => (
								<label
									key={method.id}
									className={`${
										selectedPaymentMethod === method.id
											? "bg-main before:bg-white before:outline-white before:border-main"
											: "bg-slate-200 before:outline-slate-400/50 before:border-stone-300"
									} p-3 rounded-2xl cursor-pointer flex flex-col gap-y-3 before:content-[''] before:bg-slate-300 before:w-2.5 before:h-2.5 before:rounded-full before:absolute before:top-3 before:right-3 relative before:border before:border-solid before:outline before:outline-[2px] transition-all ease-in-out duration-200`}>
									<RadioInput
										name="payment-method"
										hidden
										value={method.id}
										checked={selectedPaymentMethod === method.id}
										onChange={handleChange}
										className="hidden"
									/>
									<figure className="flex items-center">
										<img src={method.logo} alt={method.label} className="" />
									</figure>
									<span className={`text-xs leading-tight flex ${selectedPaymentMethod === method.id ? "text-white" : "text-black"}`}>
										{method.label}
									</span>
								</label>
							))}
						</div>
						<div>
							<FormControl
								style="placeholder:!text-base"
								type="text"
								placeholder="Enter Alipay ID"
								label={{
									style: "!text-base",
									exist: true,
									text: "Alipay ID",
									id: "alipay-id",
                }}
                readOnly
							/>
						</div>
						<div className="relative my-3 select-none border-y">
							<span className="absolute p-2 uppercase -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">or</span>
						</div>
						<BorderWrapper
							radiusSize="2xl"
							type="button"
							as="button"
							borderStyle="!border-dashed border-slate-300"
							noBorderAt="rounded-tl-none"
							cn="border-2 py-3 px-3 bg-slate-100/80 flex items-center w-full gap-x-3.5">
							<IconWrapper>
								<DownloadIcon className="w-5 h-5" />
							</IconWrapper>
							<div className="flex flex-col items-start flex-grow text-start">
								<span className="font-semibold">Upload Alipay Code</span>
								<span className="text-xs text-slate-600">File size should be a minimum of 2MB and in PNG or PDF format. </span>
							</div>
						</BorderWrapper>
					</div>
				</div>
			</aside>
		</div>
	);
};
