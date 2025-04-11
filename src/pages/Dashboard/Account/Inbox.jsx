import React from "react";
import Badge from "../../../components/BaseComponents/Badge";

export const Inbox = () => {
	return (
		<div>
			<header>
				<h2 className="text-2xl font-bold">Inbox</h2>
			</header>
			<section className="my-8">
				<header className="border-b border-solid pb-1">
					<h6 className="text-lg">Notifications</h6>
				</header>
				<div>
					<ul className="py-4 w-full flex flex-col gap-y-4">
						<li>
							<div className="flex items-center justify-between flex-grow gap-3">
								<aside className="text-start flex flex-col gap-y-1">
									<h3 className="text-lg leading-tight font-medium">
										We’re making some changes - <small className="text-slate-600 tracking-tight">12/01/25</small>
									</h3>
									<p className="text-gray-500 text-sm leading-tight">We have updated the transfer limits</p>
								</aside>
								<aside className="flex items-center gap-x-4">
                  <Badge text="Sysytem" className={`py-0.5`} status="success" />
								</aside>
							</div>
						</li>
						<li>
							<div className="flex items-center justify-between flex-grow gap-3">
								<aside className="text-start flex flex-col gap-y-1">
									<h3 className="text-lg leading-tight font-medium">
										Transaction successful - <small className="text-slate-600 tracking-tight">12/01/25</small>
									</h3>
									<p className="text-gray-500 text-sm leading-tight">You sent ¥5.6 to Adams R.</p>
								</aside>
								<aside className="flex items-center gap-x-4">
                  <Badge text="Account" className={`py-0.5`} status="account" />
                </aside>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">
                    We’re making some changes - <small className="text-slate-600 tracking-tight">12/01/25</small>
                  </h3>
                  <p className="text-gray-500 text-sm leading-tight">We have updated the transfer limits</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <Badge text="Sysytem" className={`py-0.5`} status="success" />
                </aside>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">
                    We’re making some changes - <small className="text-slate-600 tracking-tight">12/01/25</small>
                  </h3>
                  <p className="text-gray-500 text-sm leading-tight">We have updated the transfer limits</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <Badge text="Sysytem" className={`py-0.5`} status="success" />
                </aside>
              </div>
            </li>
					</ul>
				</div>
			</section>
		</div>
	);
};
