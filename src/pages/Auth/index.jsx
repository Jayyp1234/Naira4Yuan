import React from "react";
import { AuthHeader } from "../../Layouts/Auth/AuthHeader";
import { Outlet } from "react-router";

export const AuthPage = () => {
	return (
		<div className="flex flex-col min-h-screen co">
			<AuthHeader />
			<main className="flex-grow w-full px-4 xl:px-0 sm:w-11/12 xl:w-10/12 mx-auto">
				<Outlet />
			</main>
		</div>
	);
};
