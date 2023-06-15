
const RightPanel = ({ currentProgramme }) => {
  const TABLE_HEAD = ["Prgramme Name", "Details", "Intake"];

  return (
    <>
      <table className="w-full min-w-max table-auto text-left  border-slate-200  p-0 rounded-md  overflow-hidden">
        <thead className="bg-slate-50 font-semibold text-slate-500 ">
          <tr className=" " >
            {TABLE_HEAD &&
              TABLE_HEAD?.map((head) => (
                <th
                  key={head}
                  className="border-b  px-4 py-2  "
                >
                    {head}
                 </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {currentProgramme.courses.map(
              ({ name, details, intake, redirectTo }, index) => (
                <tr
                  key={index}
                  className="odd:bg-slate-100 border-b last:border-none"
                >
                  <td className="p-4">
                    
                      <a
                        href={redirectTo}
                        className="hover:underline underline-offset-2"
                      >
                        {name}
                      </a>
                  </td>
                  <td className="p-4">
                      {details}
                  </td>
                  <td className="p-4">
                      {intake}
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
