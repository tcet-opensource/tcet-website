import { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import type { leftPanel, rightPanel } from "../../../env";

const Accordian: React.FC<{
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
        <div
          ref={ref}
          onMouseOver={() => {
            setIsOn(true);
          }}
          onMouseOut={() => {
            setIsOn(false);
          }}
          className="w-full animate-fadeIn fixed top-[10.2rem] left-0 bg-white border flex z-20"
        >
          {/* leftpanel */}
          <div className="w-9/12 grid grid-cols-2 gap-4 p-8">
            {leftpanel.map((l) => (
              <div className="flex gap-4 p-2">
                <div>
                  <img src={l.logo} />
                </div>
                <div>
                  <div className="pb-2 w-full">
                    <a
                      href={l.link}
                      className="hover:underline text-base text-[#101828] font-medium"
                    >
                      {l.title}
                    </a>
                  </div>
                  <div className="text-sm text-[#667085]">{l.subTitle}</div>
                </div>
              </div>
            ))}
          </div>
          {/* rightpanel */}
          <div className="w-3/12 bg-[#F2F4F7] p-8">
            <div className="pb-4 text-[#444CE7]">{rightpanel.heading}</div>
            <div className="flex flex-col gap-4">
              {rightpanel.links.map((r) => (
                <a href={r.link} className="hover:underline text-[#667085]">
                  {r.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

export default Accordian;
