import React from "react";
import ImageCompany from "@/assets/images/website/avatar.jpg";

const ChatComponent = () => {
  // Static messages data
  const messages = [
    {
      sender: { id: 1, first_name: "John", last_name: "Doe" },
      receiver: null,
      content: "Hello! Is this service available?",
      created_at: "2024-10-31 10:00 AM",
      attachments: [],
    },
    {
      sender: { id: 2, first_name: "Support", last_name: "Team" },
      receiver: { id: 1 },
      content: "Yes, we are available to assist you. How can we help?",
      created_at: "2024-10-31 10:05 AM",
      attachments: [],
    },
    {
      sender: { id: 1, first_name: "John", last_name: "Doe" },
      receiver: null,
      content: "I need help with my order status.",
      created_at: "2024-10-31 10:10 AM",
      attachments: [
        {
          type: "image/jpeg",
          path: ImageCompany.src,
        },
      ],
    },
  ];

  return (
    <div className="h-full relative">
      <div
        style={{
          height: "calc(100% - 65px)",
        }}
        className="chat-content bg-slate-50 parent-height"
      >
        <div className="msgs overflow-y-auto msg-height pt-6 space-y-6">
          {messages.map((item, i) => (
            <div className="block md:px-2 px-1" key={i}>
              {item.receiver === null || item.sender.id === 1 ? (
                <div
                  className="flex space-x-2 items-end group rtl:space-x-reverse"
                  style={{ alignItems: "flex-start" }}
                >
                  <div className="flex-none">
                    <div className="h-8 w-8 rounded-full">
                      <img
                        src={ImageCompany.src}
                        alt=""
                        className="block w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex space-x-4 rtl:space-x-reverse">
                    <div>
                      <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">
                        <span className="dark:text-slate-100 text-slate-900 font-bold">
                          {item.sender.first_name} {item.sender.last_name}
                        </span>
                        <br />
                        {item.content}
                      </div>

                      {item.attachments.length > 0 && (
                        <div className="mb-2">
                          {item.attachments.map((attach, index) => (
                            <React.Fragment key={index}>
                              {attach.type.includes("image") ? (
                                <img
                                  src={attach.path}
                                  height={50}
                                  width={50}
                                  className="rounded m-1 cursor-pointer"
                                  alt=""
                                  onClick={() =>
                                    window.open(attach.path, "_blank")
                                  }
                                />
                              ) : (
                                <a
                                  href={attach.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-primary-600 hover:underline"
                                >
                                  {/* <Icon icon="teenyicons:attachment-outline" /> */}
                                  icon
                                </a>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                      <span className="font-normal text-xs text-slate-400">
                        {item.created_at}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-2 items-start justify-end group w-full rtl:space-x-reverse">
                  <div className="no flex space-x-4 rtl:space-x-reverse">
                    <div className="whitespace-pre-wrap break-all">
                      <div className="text-content p-3 bg-primary-300 dark:bg-slate-900 dark:text-slate-300 text-white-50 text-sm font-normal rounded-md flex-1 mb-1">
                        <span className="dark:text-slate-400 text-white-50 font-bold">
                          {item.sender.first_name} {item.sender.last_name}
                        </span>
                        <br />
                        {item.content}
                      </div>

                      {item.attachments.length > 0 && (
                        <div className="mb-2 flex gap-2">
                          {item.attachments.map((attach, index) => (
                            <React.Fragment key={index}>
                              {attach.type.includes("image") ? (
                                <img
                                  src={attach.path}
                                  height={50}
                                  width={50}
                                  className="rounded m-1 cursor-pointer"
                                  alt=""
                                  onClick={() =>
                                    window.open(attach.path, "_blank")
                                  }
                                />
                              ) : (
                                <a
                                  href={attach.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-primary-600 hover:underline"
                                >
                                  {/* <Icon icon="teenyicons:attachment-outline" /> */}
                                  icon
                                </a>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                      <span className="font-normal text-xs text-slate-400">
                        {item.created_at}
                      </span>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className="h-8 w-8 rounded-full">
                      <img
                        src={ImageCompany.src}
                        alt=""
                        className="block w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <footer className="sm:flex md:space-x-4 sm:space-x-2 rtl:space-x-reverse border-t-1  mb-2 p-2  border-slate-400 dark:border-slate-700">
        <form className="flex-1 relative flex space-x-3 rtl:space-x-reverse">
          <div className="flex-1">
            <textarea
              type="text"
              placeholder="Type a reply..."
              className="focus:ring-0 focus:outline-0 rounded block w-full bg-transparent dark:text-white resize-none"
            />
          </div>

          <div className="flex-none">
            <button
              type="submit"
              className="bg-primary-300 text-white-50 rounded-md px-4 py-2"
            >
              Send
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default ChatComponent;
