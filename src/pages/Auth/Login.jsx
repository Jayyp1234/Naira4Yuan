import React from "react";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { CloseEyeIcon, OpenEyeIcon } from "@/data/Icons";
import { GoogleIcon } from "@/data";
import { StateDataContext } from "@/App";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { ResetPasswordModal } from "../../components/LayoutComponents/AllModals";

const postFormBtnTextStyle = "text-[.92rem] text-main font-semibold";

const Login = () => {
	const passwordInputRef = React.useRef(null);
	const [isVisible, setIsVisible] = React.useState(false);
	const { stateData, setStateData } = React.useContext(StateDataContext);
	const {
		data: { modals },
		toggleModal,
		switchModal,
	} = useModalTrigger(stateData);
	const navigate = useNavigate();

	return (
		<div className="w-full md:w-9/12 lg:w-8/12 xl:w-3/6 2xl:w-2/5 pt-10 sm:py-14 md:pb-20 md:pt-10 mx-auto">
			<header className="flex flex-col items-center gap-y-3 text-center">
				<h2 className="text-3xl font-bold">Welcome Back.</h2>
				<span>
					New to Naira4yuan?
					<Link to={routes.AUTH.register.abs} className="underline ml-2 text-black font-semibold">
						Sign up
					</Link>
				</span>
			</header>
			<main className="mt-14">
				<form action="" className="flex flex-col gap-y-5">
					<FormControl
						type={"text"}
						style="w-full"
						placeholder="Enter your email address or phone number"
						label={{ exist: true, text: "Enter Address or phone number" }}
					/>
					<FormControl
						type={isVisible ? "text" : "password"}
						style="w-full"
						icon={{ exist: true, action: () => setIsVisible((prev) => !prev), element: isVisible ? OpenEyeIcon : CloseEyeIcon }}
						ref={passwordInputRef}
						placeholder="Enter your password"
						label={{ exist: true, text: "Password" }}
					/>
					<div className="mt-2">
						<button
							type="button"
							className="enabled:active:scale-95 transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.9rem] font-medium">
							Proceed
						</button>
						<div className="flex items-center justify-between mt-2.5">
							<button type="button" onClick={() => navigate(routes.AUTH.loginErr.abs)} className={`${postFormBtnTextStyle}`}>
								Trouble logging in
							</button>
							<button type="button" onClick={() => toggleModal("AUTH_RESET_PASSWORD", true)} className={`${postFormBtnTextStyle}`}>
								Forgot Password
							</button>
						</div>
					</div>
				</form>
				<footer className="flex flex-col items-center text-center gap-y-4 mt-3.5">
					<span>Or log in with</span>
					<button
						type="button"
						className="enabled:active:scale-95 transition-all ease-in-out w-full border border-solid border-black/30 rounded-lg p-2.5 py-3 flex items-center justify-center gap-x-2">
						<figure className="flex items-center w-6 h-6">
							<img src={GoogleIcon} alt={`${GoogleIcon} alt`} className="w-full h-full" />
						</figure>
						<span className="text-[.9rem]">Continue with Google</span>
					</button>
				</footer>
			</main>

			<ResetPasswordModal modalData={{ toggleModal }} open={modals.AUTH_RESET_PASSWORD} />
		</div>
	);
};

export default Login;
