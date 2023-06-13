import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { data } from "../../data";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const AccordionComponent = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {data &&
        data?.map((programme) => (
          <Accordion
            open={open === programme?.id}
            icon={<Icon id={programme?.id} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(programme?.id)}
              className="bg-slate-100 border-solid border-2 border-slate-200 px-4 rounded-xl my-2"
            >
              {programme?.programme_name}
            </AccordionHeader>
            <AccordionBody className=" border-solid border-2 border-slate-200 px-4 py-1 rounded-xl">
              {programme?.courses?.map((course, index) => (
                <>
                  <div className="py-2">
                    <div className="py-1">
                      <a
                        href={course?.redirectTo}
                        className="underline underline-offset-2"
                      >
                        {course?.name}
                      </a>
                    </div>
                    <div className="py-1">{course?.details}</div>
                    <div className="py-1">Intake: {course?.intake}</div>
                  </div>
                  {programme?.courses?.length - 1 !== index ? (
                    <div className="border-b-2 border-slate-200"></div>
                  ) : null}
                </>
              ))}
            </AccordionBody>
          </Accordion>
        ))}
    </Fragment>
  );
};

export default AccordionComponent;