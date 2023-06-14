import React from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { data } from "../data";

const DesktopView = () => {
  const [DesktopViewStates, setDesktopViewStates] = React.useState({
    currentProgramme: data[0],
  });

  const handleDesktopViewStatesChange = ({ name, value }) => {
    setDesktopViewStates((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="flex gap-10 justify-center">
      <div className="w-[25%]">
        <LeftPanel
          data={data}
          currentProgramme={DesktopViewStates.currentProgramme}
          handleDesktopViewStatesChange={handleDesktopViewStatesChange}
        />
      </div>
      <div className="w-[75%] rounded-lg border overflow-hidden h-fit ">
        <RightPanel currentProgramme={DesktopViewStates.currentProgramme} />
      </div>
    </div>
  );
};

export default DesktopView;
