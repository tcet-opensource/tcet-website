import React, { useState } from "react";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClickClose = () => {
    setIsOpen(false);
  };

  const onClickOpen = () => {
    setIsOpen(true);
  };

  const notification = [
    {
      message:
        "Admission Enquiry For B.E/B.Tech Courses (4 years UG Course) A.Y. 2023-24",
      link: "https://www.tcetmumbai.in/be_btech_admission.html",
    },
    {
      message: "Admission Enquiry For B.Voc Courses A.Y.2023-24",
      link: "https://docs.google.com/forms/d/1tGBy3UG70tOXcHaQAVY129Z2ehBNfgxlpEx3Q22CKuc/viewform?edit_requested=true",
    },
    {
      message: "Admission Enquiry for M.E. for A.Y.2023-24",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdGRrDkVm0MdQ9oTZ_GOMCbz08fohJk63yyNZXLlwZNAKSoeA/viewform",
    },
  ];

  return (
    <div>
      {isOpen ? (
        <div
          className="xl:w-96 lg:w-80 md:w-72 sm:w-64 w-4/5 fixed bottom-20 md:top-56 z-10 bg-white right-0 mx-8 rounded-lg hover:drop-shadow-xl
          h-max
        "
        >
          <div className="flex flex-row justify-between px-6 py-3 border border-slate-600">
            <div className="font-semibold">Notification</div>
            <button onClick={onClickClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 hover:bg-gray-200 rounded-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            {notification.map((item) => (
              <div className="border-t px-6 flex flex-row py-3 min-h-fit justify-start border-[#E4E7EC] items-baseline hover:bg-gray-200 hover:shadow-xl">
                <div className="min-h-[8px] min-w-[8px] max-h-[8px] max-w-[8px] rounded-full bg-blue-500 mr-4 hover:bg-gray-500"></div>
                <a href={item.link}>
                  <div className="text-sm">{item.message}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="fixed bottom-20 md:top-56 z-10 -right-5 mx-8 rounded-full">
          <div className="px-3">
            <button
              onClick={onClickOpen}
              className="bg-white p-3 border border-slate-600 rounded-full shadow-xl hover:drop-shadow-xl hover:shadow-2xl hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;