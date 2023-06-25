///  <reference types="@astrojs/image/client" />

export type TestimonialType = {
    info: string;
    photo: string;
    name: string;
    position: string;
  }

export type StaffTNP = {
  StaffName: string;
  designation: string;
  staffPhoto: string;
  experties: string;
};

export type leftPanel = {
  title: string;
  subTitle: string;
  logo: string;
  link: string;
}

export type rightPanel= {
  heading: string;
  links: link[];
}

export type link = {
  title: string;
  link?: string;
  subLinks?: link[];
  leftPanel?: leftPanel[];
  rightPanel?: rightPanel;
}

export type imageLink =  {
  img: string;
  alt: string
} 

export interface EventType {
  title: string;
  slug: string;
  purpose: string;
  objective: string;
  photos: imageLink[];
  testiomonials: EventTestimonialType[]
}

export type EventTestimonialType = {
  name: string,
  photo: string,
  review: string,
  position: string,
  department: string
}

export interface CompanyCardType {
  name: string;
  img: string;
}

export type IndustryInteractionType = {
  companyLogo: string;
  companyName: string;
  themeColor: string;
  description: string;
  subdescription: string;
  eventImages: imageLink[];
}

