import React from "react";
import { Typography } from "@material-tailwind/react";

const RightPanel = ({ currentProgramme }) => {
  const TABLE_HEAD = ["Prgramme Name", "Details", "Intake"];

  return (
    <>
      <table className="w-full min-w-max table-auto text-left border-solid border-2 border-slate-200 p-0 rounded-md">
        <thead className="bg-slate-100">
          <tr>
            {TABLE_HEAD &&
              TABLE_HEAD?.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {currentProgramme?.courses &&
            currentProgramme?.courses?.map(
              ({ name, details, intake, redirectTo }, index) => (
                <tr
                  key={index}
                  className="even:bg-blue-gray-50/50 border-b-2 border-slate-200"
                >
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <a
                        href={redirectTo}
                        className="underline underline-offset-2"
                      >
                        {name}
                      </a>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {details}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {intake}
                    </Typography>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </>
  );
};

export default RightPanel;
