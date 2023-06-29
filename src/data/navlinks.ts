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
      { title: "Dean SSW Message", link: "/about/dean-SSW-message" },
      { title: "Dean RnD Message", link: "/about/dean-RnD-message" },
      { title: "Dean ACD Message", link: "/about/dean-ACD-message" },
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
    leftPanel: [
      {
        title: "About us",
        subTitle: "We are always looking for talented people, Join us!",
        logo: "/Header/Icon 1.svg",
        link: "/about-us",
      },
      {
        title: "Educational Survey",
        subTitle: "We are always looking for talented people, Join us!",
        logo: "/Header/Icon 2.svg",
        link: "/educational-survey",
      },
      {
        title: "Testimonial",
        subTitle: "We are always looking for talented people, Join us!",
        logo: "/Header/Icon 3.svg",
        link: "/testimonial",
      },
      {
        title: "Institutional Activities",
        subTitle: "We are always looking for talented people, Join us!",
        logo: "/Header/Icon 1.svg",
        link: "/institutional-activities",
      },
      {
        title: "Institutional Growth",
        subTitle: "We are always looking for talented people, Join us!",
        logo: "/Header/Icon 2.svg",
        link: "/institutional-growth",
      },
      {
        title: "Documents",
        subTitle: "We are always looking for talented people, Join us!",
        logo: "/Header/Icon 3.svg",
        link: "/docs",
      },
    ],
    rightPanel: {
      heading: "Messages",
      links: [
        { title: "Chairman's Message", link: "/chairman" },
        { title: "CEO's Message", link: "/ceo" },
        { title: "Principal's Message", link: "/principal" },
        { title: "Vice-Principal's Message", link: "/vice-principal" },
        { title: "Dean's (Academic) Message", link: "/dean" },
        { title: "Dean's (R & D) Message", link: "/dean" },
        {
          title: "Dean's (Student & Staff Welfare) Message",
          link: "/dean",
        },
      ],
    },
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