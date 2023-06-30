import { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import type { leftPanel, link, rightPanel } from "../../../env";

const MobileAccordian: React.FC<{
  title: string;
  leftpanel: leftPanel[];
  rightpanel: rightPanel;
}> = ({ title, leftpanel, rightpanel }) => {
  const [isOn, setIsOn] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  useOnClickOutside(ref, () => setIsOn(false), ref2);
  return (
    <span
      ref={ref2}
      className="w-full relative text-sm lg:text-xs xl:text-sm flex justify-between items-center gap-2"
      onMouseOver={() => {
        // console.log("mouse over");
        setIsOn(true);
      }}
      onMouseOut={() => {
        // console.log("mouse out");
        // setIsOn(false)
        // setTimeout(() => {
        //   setIsOn(false);
        // },1000)
      }}
    >
      <p>{title}</p>
      {!isOn ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 lg:w-4 lg:h-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 lg:w-4 lg:h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      {isOn && (
        <span
          ref={ref}
          onMouseOver={() => {
            setIsOn(true);
          }}
          onMouseOut={() => {
            setIsOn(false);
          }}
          className="animate-fadeIn absolute top-5 right-0 rounded-xl p-4 bg-white border text-xs w-56 z-10"
        >
          {/* leftpanel */}
          <div className="flex flex-col gap-2">
            {leftpanel.map((l) => (
              <a
                href={l.link}
                className=" text-xs xl:text-sm text-[#101828] hover:underline border-b border-slate-200 pb-2 last:border-0 last:pb-0 w-full"
              >
                {l.title}
              </a>
            ))}
          </div>
          {/* rightpanel */}
          <div className="p-4 mt-4 border border-slate-200 rounded-xl">
            <div className="pb-2 text-[#444CE7]">{rightpanel.heading}</div>
            <div className="flex flex-col gap-2">
              {rightpanel.links.map((r) => (
                <a
                  href={r.link}
                  className="hover:underline text-[#667085] text-xs xl:text-sm"
                >
                  {r.title}
                </a>
              ))}
            </div>
          </div>
        </span>
      )}
    </span>
  );
};

export default MobileAccordian;
