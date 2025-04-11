import React from "react";

export const Inbox = () => {
  const notifications = [
    {
      title: "We're making some changes",
      date: "12/01/25",
      description: "We have updated the transfer limits",
      tag: "System",
      tagColor: "green",
    },
    {
      title: "Transaction successful",
      date: "12/01/25",
      description: "You sent ¥5.6 to Adams R.",
      tag: "Account",
      tagColor: "blue",
    },
    {
      title: "We're making some changes",
      date: "12/01/25",
      description: "We have updated the transfer limits",
      tag: "System",
      tagColor: "green",
    },
    {
      title: "We're making some changes",
      date: "12/01/25",
      description: "We have updated the transfer limits",
      tag: "System",
      tagColor: "green",
    },
  ];


  return (
    <>
      <div>
        <header className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-base font-normal">Inbox</h2>
        </header>
        <section className="my-8">
          <header className="flex items-center justify-between gap-x-4 mb-3 pb-1 border-b">
            <h2 className="text-md tracking-tight font-normal">Notifications</h2>
          </header>
          <div className="p-4 space-y-4">
            {notifications.map((note, idx) => (
              <div key={idx} className="flex justify-between items-start border-b pb-3">
                <div className="space-y-1">
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-900">{note.title}</h3>
                    <span className="text-sm text-gray-500 ml-2">- {note.date}</span>
                  </div>
                  <p className="text-gray-600">{note.description}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium text-${note.tagColor}-700 bg-${note.tagColor}-100 rounded-md`}>
                  {note.tag}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

    </>
  );
};
