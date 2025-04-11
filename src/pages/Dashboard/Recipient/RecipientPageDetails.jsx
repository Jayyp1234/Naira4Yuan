import React from "react";
import { ProfileImage } from "../../../components/PageComponents/Dashboard/ProfileImage";
import { Link, useParams } from "react-router";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";
import { routes } from "@/data/routes";
import { SwitchInput } from "../../../components/BaseComponents/FormInputs";

export const RecipientPageDetails = () => {
  const { recipientId } = useParams();
	return (
		<>
			<header className="flex flex-col gap-y-4">
				<ProfileImage children={<h1>AR</h1>} type="button" as={"div"} hasExtraImage={true} size="xl" />
				<div>
					<h2 className="font-bold text-2xl">Adam Ron</h2>
					<div className="flex items-center gap-x-3 mt-1.5">
						<button type="button" className="rounded-xl rounded-tl-sm animate-active bg-[#F1C34E] font-semibold py-2.5 px-4 leading-tight">
							Send
						</button>
						<button type="button" className="rounded-xl rounded-tl-sm animate-active bg-red-100 text-red-600 font-semibold py-2.5 px-4 leading-tight">
							Delete
						</button>
					</div>
				</div>
			</header>
			<main className="flex flex-col gap-y-4 my-6">
				<section className="my-4">
					<header className="border-b pb-1.5">
						<h4 className="text-slate-600">Account details</h4>
					</header>
					<div className="mt-3 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5">
						<div className="flex items-start flex-col gap-y-1">
							<span className="text-slate-500">Account holder name</span>
							<h2 className="text-slate-600 font-medium uppercase">OKELEYE IBUNKUNOLUWA OLAMIDE</h2>
						</div>
						<div className="flex items-start flex-col gap-y-1">
							<span className="text-slate-500">Account holder nickname</span>
							<h2 className="text-slate-600 font-medium uppercase">OKELEYE IBUNKUNOLUWA OLAMIDE</h2>
						</div>
						<div className="flex items-start flex-col gap-y-1">
							<span className="text-slate-500">Account provider</span>
							<h2 className="text-slate-600 font-medium">naira4yuan</h2>
						</div>
						<div className="flex items-start flex-col gap-y-1">
							<span className="text-slate-500">Account ID</span>
							<h2 className="text-slate-600 font-medium">572578357262</h2>
						</div>
						<div className="flex items-start flex-col gap-y-1">
							<span className="text-slate-500">Why am I seeing this recipient?</span>
							<h2 className="text-slate-600 font-medium">We added ADAM to your recipients when you sent money to their account.</h2>
						</div>
					</div>
				</section>
				<section className="my-4">
					<header className="border-b pb-1.5">
						<h4 className="text-slate-600">Account Settings</h4>
					</header>
					<div className="mt-3">
						<div className="flex items-center justify-between">
							<h5 className="font-medium text-base sm:text-lg">Trusted account</h5>
							<SwitchInput checked={true} isOn={true} />
						</div>
						<span className="text-[.95rem]">View your transactions with ADAM R. ACC.</span>
					</div>
				</section>
				<section className="my-4">
					<header className="border-b pb-1.5">
						<h4 className="text-slate-600">Transactions (CNY 12,000)</h4>
					</header>
					<div className="mt-3">
						<div className="flex items-center justify-between">
							<h5 className="font-medium text-base sm:text-lg">Recent transactions</h5>
							<Link to={`${routes.DASHBOARD.recipients.transaction.abs}/${recipientId}`}>
								<IconWrapper>
									<ChevronRightIcon />
								</IconWrapper>
							</Link>
						</div>
						<span className="text-[.95rem]">View your transactions with ADAM R. ACC.</span>
					</div>
				</section>
			</main>
		</>
	);
};
