import React from "react";
import { FormControl } from "../../../components/BaseComponents/FormInputs";
import { IconWrapper, SearchIcon } from "@/data/Icons";
import { ProfileImage } from "../../../components/PageComponents/Dashboard/ProfileImage";
import { avatar1, NigeriaIcon } from "@/data";
import { Beneficiary } from "../../../components/PageComponents/Dashboard/Beneficiary";
import { Link } from "react-router";
import { routes } from "@/data/routes";

export const RecipientMain = () => {
	const [activeTab, setActiveTab] = React.useState("all");

	return (
		<div>
			<header>
				<h2 className="text-2xl font-bold">Recipients</h2>
			</header>
			<section className="my-8">
				<div className="flex items-stretch sm:flex-nowrap flex-wrap gap-2 [&>div]:flex-grow gap-x-3 min-h-[auto]">
					<FormControl
						type="Search"
						style="!bg-transparent border border-solid !min-h-[unset] h-11 !rounded-lg border-stone-400"
						floatEle={{
							exist: true,
							position: "left",
							children: (
								<IconWrapper>
									<SearchIcon />
								</IconWrapper>
							),
						}}
						placeholder="Name, @Adam, email, phone"
					/>
					<button
						type="button"
						className="bg-[#F1C34E] flex w-full sm:w-auto items-center justify-center text-[.9rem] py-2.5 px-3.5 rounded-lg rounded-no-tl animate-active font-medium">
						Add recipient
					</button>
				</div>
			</section>
			<section className="my-8 flex flex-col gap-y-4">
				<span>Recent contacts</span>
				<ul className="flex items-start gap-x-3.5">
					<li className="flex flex-col items-center text-center gap-y-2">
						<ProfileImage
							to={`${routes.DASHBOARD.recipients.recep.abs}/123`}
							children={<h1>AR</h1>}
							type="button"
							as={Link}
							hasExtraImage={true}
							size="xl"
						/>
						<span className="w-14 text-sm leading-tight">Adam R. ACC</span>
					</li>
					<li className="flex flex-col items-center text-center gap-y-2">
						<ProfileImage
							to={`${routes.DASHBOARD.recipients.recep.abs}/123`}
              AvatarImage={avatar1}
              extraImage={NigeriaIcon}
							type="button"
							as={Link}
							hasExtraImage={true}
							size="xl"
						/>
						<span className="w-14 text-sm leading-tight">Adam R. ACC</span>
					</li>
				</ul>
			</section>
			<section className="my-8 flex flex-col gap-y-5">
				<div className="flex items-center gap-x-2">
					<button
						onClick={() => setActiveTab("all")}
						className={`animate-active rounded-no-tl font-medium flex items-center justify-center py-1.5 px-3.5 rounded-lg ${
							activeTab === "all" ? "text-black bg-[#F1C34E]" : "bg-transparent"
						}`}>
						All
					</button>
					<button
						onClick={() => setActiveTab("my-accounts")}
						className={`animate-active  rounded-no-tl font-medium flex items-center justify-center py-1.5 px-3.5 rounded-lg ${
							activeTab === "my-accounts" ? "text-black bg-[#F1C34E]" : "bg-transparent"
						}`}>
						My accounts
					</button>
				</div>
				{activeTab === "all" && (
					<div>
						<ul className="flex flex-col gap-y-3.5">
							{Array.from({ length: 4 }).map((_, index) => {
								return <Beneficiary key={index} itemAs="button" onClick={() => console.log("love")} />;
							})}
						</ul>
					</div>
				)}
				{activeTab === "my-accounts" && (
					<div>
						<ul className="flex flex-col gap-y-3.5">
							{Array.from({ length: 3 }).map((_, index) => {
								return <Beneficiary subImage={NigeriaIcon} key={index} itemAs="button" onClick={() => console.log("love")} />;
							})}
						</ul>
					</div>
				)}
			</section>
		</div>
	);
};
