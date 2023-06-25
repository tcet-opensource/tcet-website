import type { link } from "../env";

export const primaryLinks: link[] = [
  {
    title: "ERP",
    link: "http://erp.tcetmumbai.in/",
  },
  {
    title: "Alumni",
    link: "https://tcetmumbai.in/aboutAlumni.html",
  },
  {
    title: "Careers",
    link: "https://tcetmumbai.in/careers.html",
  },
];

export const secondaryLinks: link[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/about",
    subLinks: [
      { title: "About TCET", link: "/about" },
      { title: "Recognition & Awards", link: "/about/recognition-awards" },
      { title: "Chariman's Message", link: "/about/charimans-message" },
      { title: "CEO's Message", link: "/about/CEOs-message" },
      { title: "Principle's Message", link: "/about/principle-message" },
      { title: "Dean RnD Message", link: "/about/dean-RnD-message" },
      { title: "Dean SSW Message", link: "/about/dean-SSW-message" },
      { title: "Institutional Growth", link: "/about/institutional-growth" },
      { title: "Testimonials", link: "/about/testimonials" },
      {
        title: "Educational Survey",
        link: "/about/documentation#educational-survey",
      },
      { title: "Documentation", link: "/about/documentation" },
      {
        title: "Institutional Activities",
        link: "/about/documentation#institutional-activities",
      },
      { title: "NIRF Data", link: "/about/documentation#NIRF-data" },
      {
        title: "Mandatory Disclosure",
        link: "/about/documentation/mandotory-disclosure.pdf",
      },
      {
        title: "Perspective Plan",
        link: "/about/documentation/perspective-plan.pdf",
      },
    ],
  },
  {
    title: "Admissions",
    link: "https://www.tcetmumbai.in/image/whyTCET.pdf",
  },
  {
    title: "Academics",
    link: "https://www.tcetmumbai.in/aboutacademics.html",
  },
  {
    title: "RnD",
    link: "https://www.tcetmumbai.in/rnd_home.html",
  },
  {
    title: "Training and Placement",
    link: "https://www.tcetmumbai.in/TNP%20home.html",
  },
  {
    title: "HOC",
    link: "https://www.tcetmumbai.in/About%20HOC.html",
  },
  {
    title: "Examination",
    link: "https://www.tcetmumbai.in/aboutexamsection.html",
  },
  {
    title: "Central Library",
    link: "https://www.tcetmumbai.in/aboutLRC.html",
  },
  {
    title: "Life @TCET",
    link: "https://www.tcetmumbai.in/aboutLifeTCET.html",
  },
  {
    title: "Events",
    link: "https://www.tcetmumbai.in/studentActivities.html",
  },
];


export const getSubLinksFirstLevel = (title: string) => {
    return secondaryLinks.find((link) => link.title === title)?.subLinks;
}