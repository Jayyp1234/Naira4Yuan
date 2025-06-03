// import React from "react";
// import { routes } from "@/data/routes";
// import { Link } from "react-router";
// import { LogoFullDarkVariant } from "@/data";
// import { ChevronDownIcon, CloseIcon, IconWrapper } from "@/data/Icons";
// import { StateDataContext } from "@/App";
// import { createPortal } from "react-dom";
// import useOutsideClick from "../../../hooks/useOutsideClick";

// const sidebarItemStyle =
//   "w-full flex text-xl items-center justify-between py-2 px-2.5 transition-all duration-300 ease-in-out rounded-lg bg-transparent hover:bg-slate-100";

// const LandingSidebar = () => {
// 	const { stateData, setStateData } = React.useContext(StateDataContext);
// 	const [dropdown, setDropdown] = React.useState({
// 		howitworks: false,
// 		features: false,
// 	});
// 	const { landingSideBarVisible } = stateData;
// 	const sidebarRef = React.useRef(null);
// 	const portalRoot = document.getElementById("root");

// 	useOutsideClick(sidebarRef, () => setStateData({ ...stateData, landingSideBarVisible: false }), landingSideBarVisible);

// 	const handleDropdownStates = (dropdownName) => {
// 		setDropdown((prevState) => ({
// 			...prevState,
// 			howitworks: dropdownName === "howitworks",
// 			features: dropdownName === "features",
// 		}));
// 	};

// 	if (!portalRoot) return null;
// 	return createPortal(
// 		<div
// 			className={`fixed bg-black/50 h-full w-full z-50 top-0 left-0 backdrop-blur-sm transition-all duration-300 ease-in-out ${
// 				landingSideBarVisible ? "opacity-100" : "opacity-10 pointer-events-none"
// 			}`}>
// 			<div
// 				ref={sidebarRef}
// 				className={`bg-white transition-all duration-300 ease-in-out shadow-lg h-full w-11/12 sm:w-7/12 md:w-5/12 lg:w-4/12 ${
// 					landingSideBarVisible ? "translate-x-0" : "-translate-x-full"
// 				}`}>
//         <header className="flex items-center justify-between p-4">
//           <figure className="w-1/3 p-0 v-logo-image" role="img" title="">
// 						<Link to={routes.INDEX}>
// 							<img src={LogoFullDarkVariant} alt="" className="img-fluid" />
// 						</Link>
// 					</figure>
// 					<button
// 						type="button"
// 						className="p-1.5 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out bg-transparent hover:bg-slate-100"
// 						onClick={() => setStateData({ ...stateData, landingSideBarVisible: false })}>
// 						<IconWrapper>
// 							<CloseIcon className="w-6 h-6" />
// 						</IconWrapper>
// 					</button>
// 				</header>
//         <div className="px-4 mt-5">
// 					<ul className="flex flex-col gap-y-1.5">
// 						<li className="flex items-center">
// 							<div className={sidebarItemStyle}>Tracks</div>
// 						</li>
// 						<li className="flex items-center">
// 							<div className={sidebarItemStyle}>Support</div>
// 						</li>
// 						<li>
// 							<button className={sidebarItemStyle} type="button" onClick={() => handleDropdownStates("howitworks")}>
// 								<span>How it works</span>
// 								<IconWrapper className="text-slate-600">
// 									<ChevronDownIcon className="w-6 h-6" />
// 								</IconWrapper>
// 							</button>
// 							<div
// 								className={`px-2.5 grid transition-[grid-template-rows] duration-300 ease-in-out ${
// 									dropdown.howitworks ? "grid-rows-1" : "grid-rows-[0fr]"
// 								}`}>
//                 <div className="flex flex-col overflow-hidden gap-y-1">
//                   {/* {howItWorksArray.map((item, index) => (
// 										<div key={index} className="flex items-center gap-x-4">
// 											<IconWrapper className="p-2 rounded-sm text-slate-800" style={{ backgroundColor: item.iconBg }}>
// 												{item.icon}
// 											</IconWrapper>
// 											<span className="text-[.85rem]">{item.text}</span>
// 										</div>
//                   ))} */}
// 								</div>
// 							</div>
// 						</li>
// 						<li>
// 							<button className={sidebarItemStyle} type="button" onClick={() => handleDropdownStates("features")}>
// 								<span>Features</span>
// 								<IconWrapper className="text-slate-600">
// 									<ChevronDownIcon className="w-6 h-6" />
// 								</IconWrapper>
// 							</button>
// 							<div
// 								className={`px-2.5 grid transition-[grid-template-rows] duration-300 ease-in-out ${
// 									dropdown.features ? "grid-rows-1" : "grid-rows-[0fr]"
// 								}`}>
//                 <div className="flex flex-col overflow-hidden gap-y-1">
// 									{/* {howItWorksArray.map((item, index) => (
// 										<div key={index} className="flex items-center gap-x-4">
// 											<IconWrapper className="p-2 rounded-sm text-slate-800" style={{ backgroundColor: item.iconBg }}>
// 												{item.icon}
// 											</IconWrapper>
// 											<span className="text-[.85rem]">{item.text}</span>
// 										</div>
// 									))} */}
// 								</div>
// 							</div>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>,
// 		portalRoot
// 	);
// };

// export default LandingSidebar;

// import React from "react";
// import { routes } from "@/data/routes";
// import { Link } from "react-router";
// import { LogoFullDarkVariant } from "@/data";
// import { ChevronDownIcon, CloseIcon, IconWrapper } from "@/data/Icons";
// import { StateDataContext } from "@/App";
// import { createPortal } from "react-dom";
// import useOutsideClick from "../../../hooks/useOutsideClick";
// import { articleArray, helpdeskArray, useCases } from "./HeaderDropdown";
// import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
// import { landingPageHeaderCompanyLinkArray } from "@/data/dataArray";

// const sidebarItemStyle =
//   "w-full flex text-xl items-center justify-between py-2 px-2.5 transition-all duration-300 ease-in-out rounded-lg bg-transparent hover:bg-slate-100";

// const SidebarDropdown = ({ label, isOpen, onToggle, children }) => (
//   <li>
//     <button className={sidebarItemStyle} type="button" onClick={onToggle}>
//       <span>{label}</span>
//       <IconWrapper className="text-slate-600">
//         <ChevronDownIcon className="w-6 h-6" />
//       </IconWrapper>
//     </button>
//     <div
//       className={`px-2.5 grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-1" : "grid-rows-[0fr]"
//         }`}
//     >
//       <div className="flex flex-col overflow-hidden gap-y-1">
//         {/* Optional children rendering */}
//         {children}
//       </div>
//     </div>
//   </li>
// );

// const LandingSidebar = () => {
//   const { stateData, setStateData } = React.useContext(StateDataContext);
//   const [dropdown, setDropdown] = React.useState({
//     howitworks: false,
//     features: false,
//   });

//   const sidebarRef = React.useRef(null);
//   const portalRoot = document.getElementById("root");

//   useOutsideClick(
//     sidebarRef,
//     () => setStateData({ ...stateData, landingSideBarVisible: false }),
//     stateData.landingSideBarVisible
//   );

//   const handleDropdownStates = (key) => {
//     setDropdown({
//       howitworks: key === "howitworks",
//       features: key === "features",
//       company: key === "company",
//     });
//   };

//   if (!portalRoot) return null;

//   return createPortal(
//     <div
//       className={`fixed bg-black/50 h-full w-full z-50 top-0 left-0 backdrop-blur-sm transition-all duration-300 ease-in-out ${stateData.landingSideBarVisible
//         ? "opacity-100"
//         : "opacity-10 pointer-events-none"
//         }`}
//     >
//       <div
//         ref={sidebarRef}
//         className={`bg-white transition-all duration-300 ease-in-out shadow-lg h-full w-11/12 sm:w-7/12 md:w-5/12 lg:w-4/12 ${stateData.landingSideBarVisible ? "translate-x-0" : "-translate-x-full"
//           }`}
//       >
//         <header className="flex items-center justify-between p-4">
//           <figure className="w-1/3 p-0 v-logo-image" role="img" title="">
//             <Link to={routes.INDEX}>
//               <img src={LogoFullDarkVariant} alt="Logo" className="img-fluid" />
//             </Link>
//           </figure>
//           <button
//             type="button"
//             className="p-1.5 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out bg-transparent hover:bg-slate-100"
//             onClick={() =>
//               setStateData({ ...stateData, landingSideBarVisible: false })
//             }
//           >
//             <IconWrapper>
//               <CloseIcon className="w-6 h-6" />
//             </IconWrapper>
//           </button>
//         </header>

//         <div className="px-4 mt-5">
//           <ul className="flex flex-col gap-y-2.5">
//             <li className="flex items-center">
//               {/* <div className={sidebarItemStyle}>Tracks</div> */}
//               <Link to={routes} className={sidebarItemStyle}>
//                 <span className="v-subtext">Join Community</span>
//               </Link>
//             </li>
//             <li className="flex items-center">
//               {/* <div className={sidebarItemStyle}>Support</div> */}
//               <Link to={routes} className={sidebarItemStyle}>
//                 <span className="v-subtext">Support</span>
//               </Link>
//             </li>

//             <SidebarDropdown
//               label="How it works"
//               isOpen={dropdown.howitworks}
//               onToggle={() => handleDropdownStates("howitworks")}
//             >
//               <div className="flex flex-col mt-5 gap-y-4">
//                 <div className="flex flex-col gap-y-2">
//                   <div>
//                     <h2 className="text-base font-bold underline">How it works</h2>
//                   </div>
//                   {articleArray.map((item, index) => (
//                     <div key={index} className="flex items-center gap-x-4">
//                       <IconWrapper className="p-2 rounded-sm text-slate-800" style={{ backgroundColor: item.iconBg }}>
//                         {item.icon}
//                       </IconWrapper>
//                       <span className="text-[.96rem]">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-col gap-y-2">
//                   <div>
//                     <h2 className="text-base font-bold underline">Help desk</h2>
//                   </div>
//                   {helpdeskArray.map((item, index) => (
//                     <div key={index} className="flex items-center gap-x-4">
//                       <IconWrapper className="p-2 rounded-sm text-slate-800" style={{ backgroundColor: item.iconBg }}>
//                         {item.icon}
//                       </IconWrapper>
//                       <span className="text-[.96rem]">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </SidebarDropdown>

//             <SidebarDropdown
//               label="Products"
//               isOpen={dropdown.features}
//               onToggle={() => handleDropdownStates("features")}
//             >
//               <div className="flex flex-col mt-5 gap-y-4">
//                 <div>
//                   <h2 className="text-base font-bold underline">Use Cases</h2>
//                 </div>
//                 {useCases.map((item, index) => (
//                   <div key={index} className="flex items-center gap-x-4">
//                     <IconWrapper className="p-2 rounded-sm text-slate-800" style={{ backgroundColor: item.iconBg }}>
//                       {item.icon}
//                     </IconWrapper>
//                     <span className="text-[.96rem]">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </SidebarDropdown>

//             <li className="flex items-center">
//               <Link to={routes} className={sidebarItemStyle}>
//                 <span className="v-subtext">Blog</span>
//               </Link>
//             </li>

//             <SidebarDropdown
//               label="Company"
//               isOpen={dropdown.company}
//               onToggle={() => handleDropdownStates("company")}
//             >
//               {landingPageHeaderCompanyLinkArray.map((item, index) => {
//                 return (
//                   <Link to={item.link} className="px-3 py-2 rounded-lg hover:bg-slate-200" key={index}>
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </SidebarDropdown>
//           </ul>
//         </div>
//       </div>
//     </div>,
//     portalRoot
//   );
// };

// export default LandingSidebar;


import React from "react";
import { routes } from "@/data/routes";
import { Link } from "react-router";
import { LogoFullDarkVariant } from "@/data";
import { ChevronDownIcon, CloseIcon, IconWrapper } from "@/data/Icons";
import { StateDataContext } from "@/App";
import { createPortal } from "react-dom";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { articleArray, helpdeskArray, useCases } from "./HeaderDropdown";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { landingPageHeaderCompanyLinkArray } from "@/data/dataArray";

const sidebarItemStyle =
  "w-full flex text-xl items-center justify-between py-2 px-2.5 transition-all duration-300 ease-in-out rounded-lg bg-transparent hover:bg-slate-100";

const SidebarDropdown = ({ label, isOpen, onToggle, children }) => (
  <li>
    <button className={sidebarItemStyle} type="button" onClick={onToggle}>
      <span>{label}</span>
      <IconWrapper className="text-slate-600">
        <ChevronDownIcon className="w-6 h-6" />
      </IconWrapper>
    </button>
    <div
      className={`px-2.5 grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-1" : "grid-rows-[0fr]"
        }`}
    >
      <div className="flex flex-col overflow-hidden gap-y-1">{children}</div>
    </div>
  </li>
);

const LandingSidebar = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const [dropdown, setDropdown] = React.useState({
    howitworks: false,
    features: false,
    company: false,
  });

  const sidebarRef = React.useRef(null);
  const portalRoot = document.getElementById("root");

  useOutsideClick(
    sidebarRef,
    () => setStateData({ ...stateData, landingSideBarVisible: false }),
    stateData.landingSideBarVisible
  );

  const handleDropdownStates = (key) => {
    setDropdown((prev) => ({
      howitworks: key === "howitworks" ? !prev.howitworks : false,
      features: key === "features" ? !prev.features : false,
      company: key === "company" ? !prev.company : false,
    }));
  };

  if (!portalRoot) return null;

  return createPortal(
    <div
      className={`fixed bg-black/50 h-full w-full z-50 top-0 left-0 backdrop-blur-sm transition-all duration-300 ease-in-out ${stateData.landingSideBarVisible
        ? "opacity-100"
        : "opacity-10 pointer-events-none"
        }`}
    >
      <div
        ref={sidebarRef}
        className={`bg-white transition-all duration-300 ease-in-out shadow-lg h-full w-11/12 sm:w-7/12 md:w-5/12 lg:w-4/12 ${stateData.landingSideBarVisible ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <header className="flex items-center justify-between p-4">
          <figure className="w-1/3 p-0 v-logo-image" role="img" title="">
            <Link to={routes.INDEX}>
              <img src={LogoFullDarkVariant} alt="Logo" className="img-fluid" />
            </Link>
          </figure>
          <button
            type="button"
            className="p-1.5 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out bg-transparent hover:bg-slate-100"
            onClick={() =>
              setStateData({ ...stateData, landingSideBarVisible: false })
            }
          >
            <IconWrapper>
              <CloseIcon className="w-6 h-6" />
            </IconWrapper>
          </button>
        </header>

        <div className="px-4 mt-5">
          <ul className="flex flex-col gap-y-2.5">
            <li className="flex items-center">
              <Link to={routes} className={sidebarItemStyle}>
                <span className="v-subtext">Join Community</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to={routes} className={sidebarItemStyle}>
                <span className="v-subtext">Support</span>
              </Link>
            </li>

            <SidebarDropdown
              label="How it works"
              isOpen={dropdown.howitworks}
              onToggle={() => handleDropdownStates("howitworks")}
            >
              <div className="flex flex-col mt-5 gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-base font-bold underline">How it works</h2>
                  {articleArray.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-4">
                      <IconWrapper
                        className="p-2 rounded-sm text-slate-800"
                        style={{ backgroundColor: item.iconBg }}
                      >
                        {item.icon}
                      </IconWrapper>
                      <span className="text-[.96rem]">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-base font-bold underline">Help desk</h2>
                  {helpdeskArray.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-4">
                      <IconWrapper
                        className="p-2 rounded-sm text-slate-800"
                        style={{ backgroundColor: item.iconBg }}
                      >
                        {item.icon}
                      </IconWrapper>
                      <span className="text-[.96rem]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SidebarDropdown>

            <SidebarDropdown
              label="Products"
              isOpen={dropdown.features}
              onToggle={() => handleDropdownStates("features")}
            >
              <div className="flex flex-col mt-5 gap-y-4">
                <h2 className="text-base font-bold underline">Use Cases</h2>
                {useCases.map((item, index) => (
                  <div key={index} className="flex items-center gap-x-4">
                    <IconWrapper
                      className="p-2 rounded-sm text-slate-800"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      {item.icon}
                    </IconWrapper>
                    <span className="text-[.96rem]">{item.text}</span>
                  </div>
                ))}
              </div>
            </SidebarDropdown>

            <li className="flex items-center">
              <Link to={routes} className={sidebarItemStyle}>
                <span className="v-subtext">Blog</span>
              </Link>
            </li>

            <SidebarDropdown
              label="Company"
              isOpen={dropdown.company}
              onToggle={() => handleDropdownStates("company")}
            >
              {landingPageHeaderCompanyLinkArray.map((item, index) => (
                <Link
                  to={item.link}
                  className="px-3 py-2 rounded-lg hover:bg-slate-200"
                  key={index}
                >
                  {item.label}
                </Link>
              ))}
            </SidebarDropdown>
          </ul>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default LandingSidebar;
