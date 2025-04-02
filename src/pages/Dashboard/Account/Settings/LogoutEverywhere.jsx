import React from "react";

export const LogoutEverywhere = () => {
	return (
		<div className="max-w-2xl">
			<header className="flex flex-col items-start mb-5">
				<h2 className="text-2xl font-bold">Log out everywhere</h2>
			</header>
			<section className="my-8">
				<div className="flex flex-col gap-y-7">
					<span>Instantly protect yourself from scams, a stolen device or suspicious activity. This will:</span>
					<ul className="pl-4">
						<li className="list-disc">log out of all devices, including this one</li>
						<li className="list-disc">freeze all physical and digital cards</li>
						<li className="list-disc">cancel any pending transactions</li>
					</ul>
					<span>After you’ve activated this, you will recive an email with the steps to recover your account securely.</span>
					<button className="text-white bg-red-600 py-3 px-4 animate-active border border-solid border-red-500 rounded-lg w-full hover:bg-red-700">
						Log out everywhere
					</button>
				</div>
			</section>
		</div>
	);
};
