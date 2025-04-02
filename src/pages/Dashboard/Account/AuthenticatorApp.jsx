import React from "react";
import { IconWrapper, ShieldCheckIcon } from "@/data/Icons";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { StateDataContext } from "@/App";

export const AuthenticatorApp = () => {
	const { stateData, setStateData } = React.useContext(StateDataContext);
	const {
		data: { modals },
		toggleModal,
		switchModal,
	} = useModalTrigger(stateData);

	return (
		<>
			<div>
				<header className="flex flex-col gap-y-5">
					<h2 className="text-2xl font-bold">Authenticator app</h2>
					<span>Manage the authenticator app you use for 2-step verification.</span>
				</header>
				<section className="my-8">
					<header className="flex items-center justify-between border-b border-solid pb-1">
						<h6 className="text-lg text-slate-700 font-medium">Authenticator</h6>
						<button type="button" className="underline text-black underline-offset-2">
							Edit default
						</button>
					</header>
					<div className="py-4 w-full flex flex-col gap-y-6 mt-1 mb-10">
						<div className="flex items-center gap-4 flex-grow">
							<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
								<ShieldCheckIcon className="w-[1.3rem] h-[1.3rem]" />
							</IconWrapper>
							<div className="flex items-center justify-between flex-grow gap-3">
								<aside className="text-start flex flex-col gap-y-1">
									<h3 className="text-lg leading-tight font-medium">Authenticator enabled</h3>
									<p className="text-gray-500 text-sm leading-tight">Currently unpaired with any app</p>
								</aside>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
