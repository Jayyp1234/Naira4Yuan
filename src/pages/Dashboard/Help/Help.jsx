
import { ArrowUp, ArrowDown, ArrowRight, Play, Book, GraduationCap, CalendarDays, RadioReceiver } from 'lucide-react';
import { Link } from "react-router";
import { routes } from "@/data/routes";
import { WhatsApp } from "@mui/icons-material";
import { AdDisplayIcon, BooIcon, CalendarIcon, PlayIcon, UserVerificationIcon } from "@/data/Icons";
import { useEffect } from 'react';

export const Help = () => {

  useEffect(() => {
    console.log("Help component mounted");
  }, []);


  const transactions = [
    {
      id: 1,
      title: "Alipay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowUp className="text-gray-600" />,
      type: "debit"
    },
    {
      id: 2,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "+ 1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowDown className="text-gray-600" />,
      type: "credit"
    },
    {
      id: 3,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowRight className="text-gray-600" />,
      type: "reward"
    },
    {
      id: 1,
      title: "Alipay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowUp className="text-gray-600" />,
      type: "debit"
    },
    {
      id: 2,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "+ 1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowDown className="text-gray-600" />,
      type: "credit"
    },
    {
      id: 3,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowRight className="text-gray-600" />,
      type: "reward"
    },
    {
      id: 1,
      title: "Alipay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowUp className="text-gray-600" />,
      type: "debit"
    },
    {
      id: 2,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "+ 1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowDown className="text-gray-600" />,
      type: "credit"
    },
    {
      id: 3,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowRight className="text-gray-600" />,
      type: "reward"
    },
  ];

  const topics = [
    {
      id: 1,
      title: "How To Videos",
      description: "Step-by-step video guides on how to use all Naira4Yuan features.",
      icon: <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 2,
      title: "Naira4yuan Articles",
      description: "Curated articles just for you — guides & insights from Naira4Yuan.",
      icon: <BooIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 3,
      title: "Naira4yuan Blog",
      description: "Regular insights into our users' stories and experiences with Yuan.",
      icon: <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 4,
      title: "The Yuan Podcasts (TYP)",
      description: "The Yuan Podcast showcases top industry leaders for insightful discussions.",
      icon: <UserVerificationIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 5,
      title: "Naira4yuan Webinars",
      description: "Naira4yuan webinars just for you — guides & insights from Naira4Yuan.",
      icon: <AdDisplayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 6,
      title: "Naira4yuan Community",
      description: "Join the Naira4yuan community with lots of perks and benefits.",
      icon: <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
    },
  ];


  return (
    <>
      <div className="xs:w-11/12 xl:w-5/6 mx-auto">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl text-center text-black w-full font-medium">Hello, how can we help?</h2>
          </div>

          <div className="mb-2 mt-8 sm:mt-12">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base md:text-lg font-medium">Do you need help with a recent transaction?</h3>
              {transactions.length > 3 && (
                <Link
                  to={routes.DASHBOARD.help.transactions.abs}
                  className="text-xs sm:text-sm md:text-base text-black hover:underline"
                >
                  See all
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <div className="space-y-1 mt-3">
              {transactions.slice(0, 3).map((transaction) => {
                return (
                  <Link
                    to={routes.DASHBOARD.help.contact.abs}
                    key={transaction.id}
                    className="flex justify-between items-center hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-3 px-2 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-stone-100"
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 rounded-full mr-2 sm:mr-4">
                        {transaction.icon}
                      </div>
                      <div>
                        <h5 className="text-sm sm:text-base md:text-regular font-normal">{transaction.title}</h5>
                        <p className="text-xs sm:text-sm text-[#3D4F60]">{transaction.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h5 className={`text-sm sm:text-base md:text-regular font-normal ${transaction.type === "credit" ? "text-green-600" : "text-gray-800"}`}>
                        {transaction.amount}
                      </h5>
                      <p className="text-xs sm:text-sm text-[#3D4F60]">{transaction.balance}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 mb-10">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <h3 className="text-sm sm:text-base md:text-lg font-medium ">Explore our knowledgebase </h3>
            <GraduationCap />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topics.map((topic) => (
              <div key={topic.id} className="bg-[#F8F9FD] rounded-lg p-5 sm:p-7 md:p-10 flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full flex items-center justify-center shadow-sm mb-4 sm:mb-5">
                  {topic.icon}
                </div>
                <h3 className="text-base sm:text-lg font-normal mb-3 sm:mb-4">{topic.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-xs px-2">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to={routes.DASHBOARD.help.contact.abs} className="text-black underline text-sm sm:text-base">Contact us</Link>
          </div>
        </div>
      </div>
    </>
  );
};