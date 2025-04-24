import React from "react";
import { Link, useNavigate } from "react-router";
import { DefaultAvatarImage, LogoFullDarkVariant } from "@/data";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";
import { routes } from "../../data/routes";
import { Bell, Menu } from "lucide-react";
import { StateDataContext } from "../../App";

export const DashboardHeader = () => {
	const navigate = useNavigate();
  const { stateData, setStateData } = React.useContext(StateDataContext);

  function toggleSidebar() {
    const newState = structuredClone(stateData);
    newState.dashboard.sidebar = !stateData.dashboard.sidebar;
    setStateData(newState);
  }

	return (
    <header className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto flex items-center justify-between pt-6 pb-3">
      <div className="flex items-center gap-x-2">
        {/* Hamburger - only on small screens */}
        <button onClick={toggleSidebar} className="md:hidden rounded-full hover:bg-slate-200 transition-all duration-300">
          <IconWrapper>
            <Menu className="w-6 h-6" />
          </IconWrapper>
        </button>

        <Link to={routes.DASHBOARD.index.rel}>
          <figure className="flex items-center justify-center max-w-32">
            <img src={LogoFullDarkVariant} alt="Logo" />
          </figure>
        </Link>
      </div>

      <aside>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(routes.DASHBOARD.account.inbox.abs)}>
            <IconWrapper className="relative">
              <Bell />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                4
              </div>
            </IconWrapper>
          </button>
          <button type="button" onClick={() => navigate(routes.DASHBOARD.account.index.rel)} className="flex items-center gap-x-2">
            <figure className="flex items-center justify-center overflow-hidden rounded-full w-10 h-10">
              <img src={DefaultAvatarImage} alt="Avatar" />
            </figure>
            <div className="flex items-center gap-x-1.5">
              <span className="hidden sm:inline-flex uppercase font-semibold text-sm">ADEREMI IBRAHIM TUNDE</span>
              <IconWrapper>
                <ChevronRightIcon />
              </IconWrapper>
            </div>
          </button>
        </div>
			</aside>
		</header>
	);
};
