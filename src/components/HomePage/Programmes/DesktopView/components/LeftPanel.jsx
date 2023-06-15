import React from "react";

const LeftPanel = ({
  data,
  currentProgramme,
  handleDesktopViewStatesChange,
}) => {
  return (
    <>
      <ul className="flex flex-col gap-3 justify-center">
        {data &&
          data?.map((programme, index) => (
            <li
              onClick={() =>
                handleDesktopViewStatesChange({
                  name: "currentProgramme",
                  value: programme,
                })
              }
              key={programme?.id}
              className={`${
                programme === currentProgramme ? "bg-slate-100" : ""
              }  border border-slate-200 rounded-lg p-3 cursor-pointer flex justify-between items-center `}
            >
              <>{programme?.programme_name}</>
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 rotate-[270deg]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            </li>
          ))}
      </ul>
    </>
  );
};

export default LeftPanel;
