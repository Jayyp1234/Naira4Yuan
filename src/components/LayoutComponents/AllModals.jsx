import React from "react";
import { Modal } from "../BaseComponents/Modal";
import { FormControl, RadioInput } from "../BaseComponents/FormInputs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { CHN, FRA, NGN } from "@/data";
import { FooterButton } from "../BaseComponents/FooterButton";
import { CopyIcon2, IconWrapper, WarningIcon } from "../../data/Icons";
import { BorderWrapper } from "../PageComponents/Dashboard/Items";
import Iframe from "../BaseComponents/Iframe";
import { routes } from "../../data/routes";

const inputModalStyle =
	"bg-slate-200 rounded-lg !min-w-14 !min-h-14 focus:!outline-main !outline-main !ring-main focus:!border-main focus:!ring-main !text-2xl";

export const BasicVerificationModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;
	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("SELECT_BANK", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "border-b", textStyle: "text-main" }}>
			<div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					<FormControl
						type="tel"
						inputMode="numeric"
						label={{
							exist: true,
							text: "ID type",
						}}
						placeholder="Enter your phone number"
					/>
				</div>
				<div>
					<FooterButton text="Proceed" className="!text-[1.05rem] uppercase" />
				</div>
			</div>
		</Modal>
	);
};

export const SelectIdTypeModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;
	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("SELECT_ID", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Select ID type", style: "", textStyle: "text-main" }}>
			<div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					<label htmlFor="bvn" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
						<div className="flex items-center gap-2">
							<RadioInput name="referral" id="bvn" />
							<span className="text-sm leading-tight flex">Bank Verification Number (BVN)</span>
						</div>
					</label>
					<label htmlFor="nin" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
						<div className="flex items-center gap-2">
							<RadioInput name="referral" id="nin" />
							<span className="text-sm leading-tight flex">National Identity Number (NIN)</span>
						</div>
					</label>
				</div>
				<div>
					<FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
				</div>
			</div>
		</Modal>
	);
};

export const ManualBVNVerificationModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;
	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("SELECT_BANK", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "border-b", textStyle: "text-main" }}>
			<div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					<FormControl
						type="text"
						label={{
							exist: true,
							text: "Full name",
						}}
						placeholder="Enter your full name"
					/>
					<FormControl
						type="tel"
						inputMode="numeric"
						label={{
							exist: true,
							text: "Phone number",
						}}
						placeholder="Enter your phone number"
					/>
					<FormControl
						type="date"
						inputMode="numeric"
						label={{
							exist: true,
							text: "Phone number",
						}}
						placeholder="Enter your phone number"
					/>
				</div>
				<div>
					<FooterButton text="Verify" className="!text-[1.05rem] uppercase" />
				</div>
			</div>
		</Modal>
	);
};

export const EmailVerificationModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("AUTH_EMAIL_VERIFICATION", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Verify email address", style: "border-b", textStyle: "text-main" }}>
			<div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					<section>
						<span>
							We sent a code to <b>tundeburemo@gmail.com</b>
						</span>
						<div className="flex flex-col gap-y-2 mt-6">
							<div>
								<label htmlFor="code" className="text-[.94rem]">
									Enter code
								</label>
								<InputOTP maxLength={4} className="flex flex-col">
									<InputOTPGroup className="flex gap-x-4">
										<InputOTPSlot index={0} className={inputModalStyle} />
										<InputOTPSlot index={1} className={inputModalStyle} />
										<InputOTPSlot index={2} className={inputModalStyle} />
										<InputOTPSlot index={3} className={inputModalStyle} />
									</InputOTPGroup>
								</InputOTP>
							</div>
						</div>
					</section>
					<div className="mt-6">
						<span className="text-[.95rem]">
							Didn't receive a code?
							<button type="button" className="ms-2 font-semibold underline text-main">
								Click to resend in 0:58
							</button>
						</span>
					</div>
				</div>
				<div>
					<FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
				</div>
			</div>
		</Modal>
	);
};

export const ResetPasswordModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("AUTH_RESET_PASSWORD", false)}
			modalHeader={{ hasHeader: true, modalTitle: "", style: "", textStyle: "text-main" }}>
			<div className="pb-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					<section>
						<div className="text-center">
							<h2 className="text-2xl font-semibold">Reset Password</h2>
							<span className="text-sm">
								We sent a code to <b className="underline underline-offset-2 font-semibold">tundeburemo@gmail.com</b>
							</span>
						</div>
						<div className="min-h-72 flex-grow">
							<div className="my-5 flex flex-col gap-y-3.5">
								<div>
									<label htmlFor="code" className="text-[.94rem]">
										Enter code
									</label>
									<InputOTP maxLength={4} className="flex flex-col">
										<InputOTPGroup className="flex gap-x-4">
											<InputOTPSlot index={0} className={inputModalStyle} />
											<InputOTPSlot index={1} className={inputModalStyle} />
											<InputOTPSlot index={2} className={inputModalStyle} />
											<InputOTPSlot index={3} className={inputModalStyle} />
										</InputOTPGroup>
									</InputOTP>
								</div>
								<FormControl
									type="password"
									label={{
										exist: true,
										text: "New password",
									}}
									placeholder="Enter new password"
								/>
								<FormControl
									type="password"
									label={{
										exist: true,
										text: "Retype New Password",
									}}
									placeholder="Retype new password"
								/>
								<div className="mb-6">
									<span className="text-[.95rem]">
										Didn't receive a code?
										<button type="button" className="ml-2 underline text-base font-semibold">
											Click to resend
										</button>
									</span>
								</div>
							</div>
						</div>
						<div>
							<FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
						</div>
					</section>
				</div>
			</div>
		</Modal>
	);
};

export const SelectReferralMethodModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;
	const referralSources = [
		{ id: "twitter", label: "Twitter" },
		{ id: "friends_or_family", label: "Friends or Family" },
		{ id: "linkedin", label: "LinkedIn" },
		{ id: "instagram", label: "Instagram" },
		{ id: "tiktok", label: "Tiktok" },
		{ id: "word_of_mouth", label: "Word of mouth" },
	];

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("SELECT_REFERRAL_METHOD", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Select referral method", style: "", textStyle: "text-main" }}>
			<div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					{referralSources.map((referral, index) => (
						<label
							key={referral.id}
							htmlFor={referral.id}
							className="flex items-center justify-between cursor-pointer border-b border-gray-200 last:border-b-0 pb-2">
							<div className="flex items-center gap-2">
								<RadioInput name="referral" id={referral.id} />
								<span className="text-sm leading-tight flex">{referral.label}</span>
							</div>
						</label>
					))}
				</div>
				<div>
					<FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
				</div>
			</div>
		</Modal>
	);
};

export const AccountOwnershipSelectBalanceModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;
	const countries = [{ id: "ngn", label: "NGN-Balance", icon: NGN }];

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Select balance", style: "border-b", textStyle: "text-black" }}>
			<div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72 pt-6">
					{countries.map((country, index) => (
						<label
							key={country.id || index}
							htmlFor={country.id}
							className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-2">
							<div className="flex items-center gap-2">
								<RadioInput name="country" id={country.id} />
								<span className="text-sm leading-tight flex">{country.label}</span>
							</div>
							<figure className="w-5 h-5">
								<img src={country.icon} alt="" className="img-fluid" />
							</figure>
						</label>
					))}
				</div>
				<div>
					<FooterButton text="Continue" onClick={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false)} className="!text-[1.05rem]" />
				</div>
			</div>
		</Modal>
	);
};

export const SelectCountryModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;
	const countries = [
		{ id: "ngn", label: "NGN", icon: NGN },
		{ id: "chn", label: "CHN", icon: CHN },
		{ id: "fra", label: "FRA", icon: FRA },
	];

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("SELECT_COUNTRY", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "", textStyle: "text-main" }}>
			<div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					{countries.map((country, index) => (
						<label
							key={country.id || index}
							htmlFor={country.id}
							className="flex items-center justify-between cursor-pointer border-b border-gray-200 last:border-b-0 pb-2">
							<div className="flex items-center gap-2">
								<RadioInput name="country" id={country.id} />
								<span className="text-sm leading-tight flex">{country.label}</span>
							</div>
							<figure className="w-5 h-5">
								<img src={country.icon} alt="" className="img-fluid" />
							</figure>
						</label>
					))}
				</div>
				<div>
					<FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
				</div>
			</div>
		</Modal>
	);
};

export const TwoFAMessageAlertPreferenceModal = ({ open, modalData, action }) => {
	const preferences = [
		{ id: "sms", label: "SMS" },
		{ id: "voice-call", label: "Voice call" },
		{ id: "whatsapp", label: "Whatsapp" },
	];

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("DASHBOARD_2FA_VERFICATION_ALERT_METHOD", false)}
			modalHeader={{ hasHeader: true, modalTitle: "Select Preference Method", style: "border-b" }}>
			<div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					{preferences.map((preferences, index) => (
						<label
							key={preferences.id || index}
							htmlFor={preferences.id}
							className="flex items-center justify-between cursor-pointer border-b border-gray-200 last:border-b-0 pb-2">
							<div className="flex items-center gap-2">
								<RadioInput name="preferences" id={preferences.id} />
								<span className="text-sm leading-tight flex">{preferences.label}</span>
							</div>
						</label>
					))}
				</div>
				<div>
					<FooterButton text="Continue" className="!text-[1.05rem]" />
				</div>
			</div>
		</Modal>
	);
};

export const BankTransferModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("DASHBOARD_BANK_TRANSFER", false)}
			modalHeader={{ hasHeader: true, modalTitle: "", style: "border-b", textStyle: "" }}>
			<div className="p-6 pb-10 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
				<div className="flex flex-col flex-grow gap-y-3 min-h-72">
					<header className="text-center">
						<h2 className="text-3xl font-semibold">Bank transfer details</h2>
					</header>
					<div className="flex flex-col gap-y-3">
						<span>
							Transfer funds from any Nigerian bank to the account details below. Once the payment is made, the amount will automatically be credited
							to your Gate Africa wallet, ready for use on the platform.
						</span>
						<div className="flex items-center gap-x-2 rounded-lg p-2 bg-yellow-100 mb-2">
							<IconWrapper className="text-yellow-400">
								<WarningIcon />
							</IconWrapper>
							<span className="leading-tight text-[.95rem]">NB: A fee of ¥1 will be charge </span>
						</div>
						<button
							type="button"
							className="flex justify-center mx-auto items-center font-medium bg-slate-200 rounded-lg rounded-no-tl py-2.5 px-5 gap-x-2">
							<h4 className="text-xl">0050924366</h4>
							<IconWrapper>
								<CopyIcon2 />
							</IconWrapper>
						</button>
						<BorderWrapper cn="py-3 px-4 flex flex-col items-start rounded-tl-sm mt-2" radiusSize="lg">
							<span className="flex items-center gap-x-2">
								<span className="font-medium">Bank:</span>
								<span className="text-slate-500">Safe Haven Microfinance Bank</span>
							</span>
							<span className="flex items-center gap-x-2">
								<span className="font-medium">Acc Name:</span>
								<span className="text-slate-500">Gate Africa KORA</span>
							</span>
						</BorderWrapper>
					</div>
				</div>
				<div className="mt-4">
					<FooterButton text="I have made the transfer" onClick={action ? action : null} className="!text-[1.05rem] animate-active" />
				</div>
			</div>
		</Modal>
	);
};

export const HowToUseNaira4YuanModal = ({ open, modalData, action }) => {
	const { toggleModal } = modalData;

	return (
		<Modal
			isOpen={open}
			onRequestClose={() => toggleModal("HOW_TO_NAIRA4YUAN", false)}
			modalHeader={{ hasHeader: true, modalTitle: "How to use Naira4Yuan", style: "border-b", textStyle: "" }}>
			<div className="p-6 pb-10 flex flex-col gap-y-4 w-full mx-auto">
				<div className="flex flex-col flex-grow gap-y-5">
					<Iframe srcLink={routes.EXTERNAL.youtube} />
				</div>
				<div className="w-10/12 xl:w-7/12 mx-auto text-center">
					<span className="text-[.95rem]">
						This video shows the process of sending USDT from an external wallet. Click "Watch, Proceed" to continue to sell.
					</span>
				</div>
				<div className="mt-4">
					<FooterButton text="Watch, Proceed" onClick={action ? action : null} className="!text-[1.05rem] animate-active" />
				</div>
			</div>
		</Modal>
	);
};
