import React from "react";
import { routes } from "@/data/routes";
import { Link } from "react-router";
import { LogoFullDarkVariant } from "@/data";
import { ChevronDownIcon, CloseIcon, IconWrapper } from "@/data/Icons";
import { StateDataContext } from "@/App";
import { createPortal } from "react-dom";
import useOutsideClick from "../../../hooks/useOutsideClick";

const sidebarItemStyle =
	"w-full flex items-center justify-between py-2 px-2.5 transition-all duration-300 ease-in-out rounded-lg bg-transparent hover:bg-slate-100";

const LandingSidebar = () => {
	const { stateData, setStateData } = React.useContext(StateDataContext);
	const [dropdown, setDropdown] = React.useState({
		howitworks: false,
		features: false,
	});
	const { landingSideBarVisible } = stateData;
	const sidebarRef = React.useRef(null);
	const portalRoot = document.getElementById("root");

	useOutsideClick(sidebarRef, () => setStateData({ ...stateData, landingSideBarVisible: false }), landingSideBarVisible);

	const handleDropdownStates = (dropdownName) => {
		setDropdown((prevState) => ({
			...prevState,
			howitworks: dropdownName === "howitworks",
			features: dropdownName === "features",
		}));
	};

	if (!portalRoot) return null;
	return createPortal(
		<div
			className={`fixed bg-black/50 h-full w-full z-50 top-0 left-0 backdrop-blur-sm transition-all duration-300 ease-in-out ${
				landingSideBarVisible ? "opacity-100" : "opacity-10 pointer-events-none"
			}`}>
			<div
				ref={sidebarRef}
				className={`bg-white transition-all duration-300 ease-in-out shadow-lg h-full w-11/12 sm:w-7/12 md:w-5/12 lg:w-4/12 ${
					landingSideBarVisible ? "translate-x-0" : "-translate-x-full"
				}`}>
				<header className="p-4 flex items-center justify-between">
					<figure className="v-logo-image p-0 w-1/3" role="img" title="">
						<Link to={routes.INDEX}>
							<img src={LogoFullDarkVariant} alt="" className="img-fluid" />
						</Link>
					</figure>
					<button
						type="button"
						className="p-1.5 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out bg-transparent hover:bg-slate-100"
						onClick={() => setStateData({ ...stateData, landingSideBarVisible: false })}>
						<IconWrapper>
							<CloseIcon className="w-6 h-6" />
						</IconWrapper>
					</button>
				</header>
				<div className="px-4">
					<ul className="flex flex-col gap-y-1.5">
						<li className="flex items-center">
							<div className={sidebarItemStyle}>Tracks</div>
						</li>
						<li className="flex items-center">
							<div className={sidebarItemStyle}>Support</div>
						</li>
						<li>
							<button className={sidebarItemStyle} type="button" onClick={() => handleDropdownStates("howitworks")}>
								<span>How it works</span>
								<IconWrapper className="text-slate-600">
									<ChevronDownIcon className="w-6 h-6" />
								</IconWrapper>
							</button>
							<div
								className={`px-2.5 grid transition-[grid-template-rows] duration-300 ease-in-out ${
									dropdown.howitworks ? "grid-rows-1" : "grid-rows-[0fr]"
								}`}>
								<div className="flex flex-col gap-y-1 overflow-hidden">
                  {/* {howItWorksArray.map((item, index) => (
										<div key={index} className="flex items-center gap-x-4">
											<IconWrapper className="rounded-sm p-2 text-slate-800" style={{ backgroundColor: item.iconBg }}>
												{item.icon}
											</IconWrapper>
											<span className="text-[.85rem]">{item.text}</span>
										</div>
                  ))} */}
								</div>
							</div>
						</li>
						<li>
							<button className={sidebarItemStyle} type="button" onClick={() => handleDropdownStates("features")}>
								<span>Features</span>
								<IconWrapper className="text-slate-600">
									<ChevronDownIcon className="w-6 h-6" />
								</IconWrapper>
							</button>
							<div
								className={`px-2.5 grid transition-[grid-template-rows] duration-300 ease-in-out ${
									dropdown.features ? "grid-rows-1" : "grid-rows-[0fr]"
								}`}>
								<div className="flex flex-col gap-y-1 overflow-hidden">
									{/* {howItWorksArray.map((item, index) => (
										<div key={index} className="flex items-center gap-x-4">
											<IconWrapper className="rounded-sm p-2 text-slate-800" style={{ backgroundColor: item.iconBg }}>
												{item.icon}
											</IconWrapper>
											<span className="text-[.85rem]">{item.text}</span>
										</div>
									))} */}
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>,
		portalRoot
	);
};

export default LandingSidebar;
