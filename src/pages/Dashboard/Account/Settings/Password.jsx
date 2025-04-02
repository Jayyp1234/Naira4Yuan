import React from "react";
import { FormControl } from "../../../../components/BaseComponents/FormInputs";
import { BorderWrapper } from "../../../../components/PageComponents/Dashboard/Items";
import { ExclamationIcon, IconWrapper, LinkoutIcon, PlusSlimIcon } from "../../../../data/Icons";
import { Link } from "react-router";

export const Password = () => {
	return (
		<div className="max-w-xl">
			<header className="flex flex-col gap-y-5 mb-3">
				<h2 className="text-2xl font-bold">Change Password</h2>
				<BorderWrapper
					radiusSize="2xl"
					type="button"
					as="button"
					borderStyle="border-slate-300"
					cn="border-2 py-4 px-3 bg-amber-50 flex items-start w-full gap-x-3.5">
					<IconWrapper className="p-1.5 border-amber-100 border border-solid text-slate-600 bg-white rounded-full">
						<ExclamationIcon />
					</IconWrapper>
					<div className="flex flex-grow flex-col gap-y-4 items-start text-start">
						<span className="text-slate-600 text-[.9rem]">
							We will never send you a temporary password by phone, email, or text message, when changing your password, only use something that’s
							only known to you
						</span>
						<Link className="flex items-center gap-x-2 font-medium underline-offset-2 underline">
							<span className="text-[.9rem]">Learn how to keep your account safe</span>
							<IconWrapper>
								<LinkoutIcon className="w-4 h-4" />
							</IconWrapper>
						</Link>
					</div>
				</BorderWrapper>
			</header>
			<section className="my-8">
				<form action="" className="flex flex-col gap-y-4">
					<FormControl type={"password"} placeholder="********" label={{ exist: true, text: "Current Password", id: "current-password" }} />
					<FormControl type={"password"} placeholder="********" label={{ exist: true, text: "New Password", id: "new-password" }} />
					<div className="mt-8">
						<button
							type="button"
							disabled
							className="font-medium px-8 rounded-md disabled:cursor-not-allowed disabled:opacity-60 enabled:active:scale-95 transition-all ease-in-out enabled:bg-main enabled:text-white enabled:border-main disabled:border-slate-200 py-4 w-full disabled:bg-gray-300 flex items-center justify-center text-sm">
							Update password
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};
