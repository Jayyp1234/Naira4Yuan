
import { ArrowDownIcon, IconWrapper, ChevronRightIcon } from "@/data/Icons";
import { routes } from "@/data/routes";
import { Link, useNavigate } from "react-router";

// Function to convert string to URL-friendly slug
const slugify = (str) =>
  str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

export const HelpContact = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="items-center space-x-1 text-sm text-gray-800 hidden sm:flex">
        <Link
          to={routes.DASHBOARD.help.index.abs}
          className="underline font-medium"
        >
          Help
        </Link>
        <ChevronRightIcon className="w-3 h-3" />
        <Link to={routes.DASHBOARD.help.contact.abs} className="underline font-medium">Contact</Link>
        <ChevronRightIcon className="w-3 h-3" />
        <Link to={routes.DASHBOARD.help.transactions.abs} className="underline font-medium">Transactions</Link>
        <ChevronRightIcon className="w-3 h-3" />
        <Link className="font-normal">Transaction</Link>
      </div>

      <div className="max-w-xl mx-auto mt-10">
        <div className="flex flex-col items-center justify-center">
          <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 w-fit mx-auto rounded-full">
            <ArrowDownIcon className="rotate-180 w-5 h-5" />
          </IconWrapper>
          <div className="text-lg text-black">1200 NGN</div>
          <div className="text-sm text-[#3D4F60]">NGN Deposit</div>
        </div>

        <div className="space-y-4 mt-10 mb-20">
          <p className="text-sm text-gray-600 mb-2">Select an issue</p>
          <div className="border-t border-gray-100" />

          {[
            "Transfer hasn't arrived yet",
            "How do I download a receipt?",
            "I sent money to the wrong bank details",
            "I sent the wrong amount",
            "I want to cancel this transfer",
            "Something else"
          ].map((issue, index) => {
            const helpId = slugify(issue); // Create a slug for the issue

            return (
              <Link
                key={index}
                to={`${routes.DASHBOARD.help.contact.abs}/${helpId}`} // Dynamic navigation
                className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-50"
              >
                <span className="text-base text-black">{issue}</span>
                <svg
                  className="w-4 h-4 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
