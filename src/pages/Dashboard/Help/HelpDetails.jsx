import React from "react";
import { ChevronRightIcon } from "@/data/Icons";
import { routes } from "@/data/routes";
import { Link, useNavigate, useParams } from "react-router";


export const HelpDetails = () => {
  const navigate = useNavigate();
  const { helpId } = useParams();

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
        <Link className="font-medium">Transaction</Link>
        <ChevronRightIcon className="w-3 h-3" />
        <Link className="font-normal">Transfer hasn{`'`}t arrived yet</Link>
      </div>

      <div className="max-w-lg mx-auto p-6 flex flex-col items-center mt-12">
        <h1 className="text-3xl font-bold text-center mb-6">Transfer hasn{`'`}t arrived yet</h1>

        <div className="w-full mb-8">
          <p className="text-base mb-6">
            If your transfer is taking longer than expected, we recommend waiting 3 working
            days. Sometimes your recipient{`'`}s bank takes extra time to process your transfer.
          </p>

          <div className="mb-6">
            <h2 className="text-base mb-2">After 3 working days:</h2>
            <ol className="list-decimal pl-7 space-y-1">
              <li className="list-decimal">Check your recipient{`'`}s details are correct</li>
              <li className="list-decimal">
                Download your transfer receipt and share it with your recipient{`'`}s bank.
              </li>
              <span>They can use this to look for the transfer.</span>
            </ol>
          </div>
        </div>

        <button className="w-full bg-[#F1C34E] text-sm text-black py-3 px-4 rounded mb-4 transition duration-200">
          Download receipt
        </button>

        <Link to={`${routes.DASHBOARD.help.contact.abs}`} className="underline text-center">
          I still need help
        </Link>
      </div>
    </div>
  );
};
