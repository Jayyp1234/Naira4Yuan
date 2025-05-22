import React, { useState } from "react";
import Badge from "../../../components/BaseComponents/Badge";
import { ChevronLeftIcon } from "@/data/Icons";
import { Link, useNavigate } from "react-router";
import { InboxModal } from "@/components/LayoutComponents/AllModals";
import { CashbackReferralSkeleton, InboxSkeleton } from "@/components/Skeleton/Skeleton";

export const Inbox = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleLinkClick = (content) => {
    setModalContent(content);  // Set the content for the modal
    setIsModalOpen(true);  // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
  };

  const links = [
    {
      title: "We’re making some changes",
      description: "We have updated the transfer limits",
      date: "12/01/25",
      badge: "System",
      status: "success",
    },
    {
      title: "Transaction successful",
      description: "You sent ¥5.6 to Adams R.",
      date: "12/01/25",
      badge: "Account",
      status: "account",
    },
    {
      title: " We’re making some changes",
      description: "We have updated the transfer limits",
      date: "12/01/25",
      badge: "System",
      status: "success",
    },
    {
      title: "We’re making some changes",
      description: "We have updated the transfer limits",
      date: "12/01/25",
      badge: "System",
      status: "success",
    },
  ];

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <InboxSkeleton />;
  }

  return (
    <div>
      <nav className="flex items-center flex-1 mb-3">
        <button
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </button>
      </nav>
      <header>
        <h2 className="text-2xl font-bold">Inbox</h2>
      </header>
      <section className="my-8">
        <header className="border-b border-solid pb-1">
          <h6 className="text-lg">Notifications</h6>
        </header>
        <div>
          <ul className="py-4 w-full flex flex-col gap-y-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="flex items-center justify-between flex-grow gap-3 hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-3 px-2 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-stone-100"
                  onClick={() => handleLinkClick(link)} // Handle link click
                >
                  <aside className="text-start flex flex-col gap-y-1">
                    <h3 className="text-lg leading-tight font-medium">
                      {link.title} - <small className="text-slate-600 tracking-tight">{link.date}</small>
                    </h3>
                    <p className="text-gray-500 text-sm leading-tight">{link.description}</p>
                  </aside>
                  <aside className="flex items-center gap-x-4">
                    <Badge text={link.badge} className={`py-0.5`} status={link.status} />
                  </aside>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InboxModal
        open={isModalOpen}
        modalData={{ toggleModal: closeModal }}  // Passing close function to modal
        modalContent={modalContent}  // Pass dynamic content to modal
        action={closeModal}  // Action when "Proceed" button is clicked (close the modal)
      />
    </div>
  );
};
