import React from "react";
import Banner from "@/components/Banner";
import ObjectivesSection from "@/components/Objectives";
import { Metadata } from "next";
import Activities from "@/components/Activities/Activities";
import CalendarView from "@/components/CalenderView";
import ResearchGazette from "@/components/ResearchGazette";
import PastSessions from "@/components/PastSessions";
import DirectorNote from "@/components/Quote/DirectorNote";
import NoteSection from "@/components/Note/NoteSection";
import { Note } from "@/types/note";
import Team from "./Teams";

import { faComments, faBullhorn, faObjectGroup, faMagic, faCalendarAlt, faStar, faDatabase, faGraduationCap, faGlobe, faHandsHelping, faBullseye } from '@fortawesome/free-solid-svg-icons';




export const metadata: Metadata = {
  title: "Career Development Wing Page",
  description: "This is the Career Development Wing page for ANC council",
  // other metadata
};

const banners = [
  {
    delay: 3000,
    className: 'dark:hidden',
    slides: [
      { src: '/images/banner/anciitk_cover.jpeg', alt: 'Slide 1' },
      { src: '/images/banner/image2.jpeg', alt: 'Slide 2' },
      { src: '/images/banner/image3.jpg', alt: 'Slide 3' }
    ]
  },
  {
    delay: 3000,
    className: 'dark:block',
    slides: [
      { src: '/images/banner/bg1.jpg', alt: 'Slide 1' },
      { src: '/images/banner/dark-02.jpeg', alt: 'Slide 2' },
      { src: '/images/banner/dark-03.jpeg', alt: 'Slide 3' }
    ]
  }
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/ANCIITK',
    label: 'facebook icon',
    iconPath: 'M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z'
  },
  {
    href: 'https://www.twitter.com/anciitk',
    label: 'twitter icon',
    iconPath: 'M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
  },
  // Add more social links here
];

const description = {
  title: "Providing an Extraordinary Boost in Career",
  // highlight: "a Better Future",
  text: "The Career Development Wing of the council aims to provide students proper guidance in Career related aspects and helps them develop careers in the fields that align with their professional interests."
};




const objectives = [
  {
    icon: faComments,
    // title: "To Organise Tests, Workshops and guiding sessions for Skills ",
    // title: "Providing Assistance to Students for upskilling them",
    title: "Career Preparation",
    text: "We organize workshops and training programs to develop essential professional skills, including communication, leadership, and technical expertise. ",
  },
  {
    icon: faBullhorn,
    title: "Calling the best Internship Opportunities for Students",
    text: "We aim to call internship oportunities by the government and private agencies and companies for the students.",
  },
  {
    icon: faObjectGroup,
    // title: "To Contact Alumni & Professionals in Diverse Career Fields",
    title: "Career Awareness",
    text: "We contact our alums as well as other professionals to help our students connect with them so that they get knowledge and get enlightened in developing careers in diverse areas.",
  },
  {
    icon: faMagic,
    title: "Career Counselling",
    text: "Our mission is to assist the students in navigating their career paths and equipping them with the essential skills, knowledge, and resources necessary for success in their chosen fields.",
  },
];


const activitiesData = [
  {
    icon: faCalendarAlt,
    name: "Event Organisation",
    text: "Plan and organise a variety of events such as talks, sessions, and workshops covering career options, guidance, and departmental orientations. Organise sessions including highly-qualified speakers from various fields to motivate students.",
  },
  {
    icon: faStar,
    name: "Career Guidance",
    text: "Plan and execute numerous events to spread awareness about various career opportunities and prepare students for the same. High-professionals come as speakers to provide guidance about their respective fields.",
  },
  {
    icon: faHandsHelping,
    name: "Career Connect",
    text: "Annual Flagship event conducted every year in the first week of March.  This event aims to inspire and empower both undergraduate and postgraduate students by providing them with the necessary tools and information to make well-informed decisions in their professional, social, and personal lives.",
  },
  {
    icon: faGraduationCap,
    name: "Internship and Placement Preparation",
    text: "Host workshops on resume-making, Group Discussions and Interview preparations. Conducting mock interviews so that they get a maximum chance of being shortlisted and are able to create a good impression.",
  },
  {
    icon: faBullseye,
    name: "Upskilling",
    text: "Conduct numerous sessions to upgrade skills of students to current industry requirements. Provide best resources to students so that they can make best use of their free time to learn new skills.",
  },
  {
    icon: faHandsHelping,
    name: "Alumni Sessions",
    text: "Alumni will connect with the students to foster a sense of community, promote learning beyond the classroom, and provide valuable connections and resources as the students navigate their academic and professional journeys.",
  },
];

const activitiesHeader = {
  title: "OUR ACTIVITIES",
  subtitle: "Discover Our Wide Range of Activities",
  description: `Explore various activities organized by our team, including events, workshops, and more. Get involved and enhance your experience.`,
};


const calendarInfo = {
  title: "Upcoming Talks & Seminars",
  description: `The Research wing routinely conducts a number of events, talks, and sessions, covering various aspects of research and work (including career options, research opportunities (on & off campus), guidance sessions, departmental orientation sessions, and technical workshops). Managers of the wing bear the responsibility of organizing these sessions with the assistance of the council secretaries.
  Join us for insightful talks and seminars hosted by leading experts in various fields. Stay updated with our calendar to never miss an event.`,
  buttonText: "View Calendar",
  buttonUrl: "#"
};



const PastSessionsHeader = {
  title: "OUR PREVIOUS SESSIONS",
  subtitle: "Details of Our Past Sessions",
  description: "Find resources like presentations and recordings of our past sessions.",
};

const BlogsHeader = {
    title: "BLOGS",
    subtitle: "Details of Our Blog Series",
    description: "Find resources like presentations and recordings of our blogs.",
  };

const sessions = [
  {
    title: "Group Discussions",
    description: "A session for Y22s and Y21s for GD preparation.",
    image: "/images/banner/GD.jpg", // Add the path to the image
    resources: [
      { type: "Presentation", link: "https://www.instagram.com/p/C8P2_7wOMkD/?utm_source=ig_web_copy_link", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  {
    title: "Resume Making Session",
    description: "A session to mentor Y22s and Y21s for resume-making.",
    image: "/images/banner/resume.jpg", // Add the path to the image
    resources: [
      { type: "Presentation", link: "https://www.instagram.com/p/C8Oh6Z2RVdE/?utm_source=ig_web_copy_link", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  {
    title: "Internship Training Program - For Quant",
    description: "A training program for Y22s to mentor them for Quant profile.",
    image: "/images/banner/quant.jpg", // Add the path to the image
    resources: [
      { type: "Presentation", link: "https://www.instagram.com/p/C6jVF61xg2a/?utm_source=ig_web_copy_link", label: "View Presentation" },
      { type: "Recording", link: "#", label: "Watch Recording" },
    ],
  },
  // Add more sessions as needed
];

const Blogs = [
    {
      title: "The More You Know",
      description: "For Quant Profile by Varun Tokas",
      image: "/images/banner/quantBlog.jpg", // Add the path to the image
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    {
      title: "The More You Know",
      description: "For Core Profile by Pranjal Singh",
      image: "/images/banner/coreBlog.jpg", // Add the path to the image
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    {
      title: "The More You Know",
      description: "For Finance Profile by Siddhant Singh",
      image: "/images/banner/financeBlog.jpg", // Add the path to the image
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    // Add more sessions as needed
  ];


const headerInfo = {
  title: "DIRECTOR’S NOTE",
  subtitle: "Director’s Note on Research",
  description: `A personal note from the Director about the importance and impact of research at IIT-Kanpur.
                ○ A slideshow of quotes from prominent researchers on campus.
                ○ Each slide should include the quote, the researcher’s name, and their photo.`,
};

const quotes = [
  {
    id: 1,
    name: "Dr. Alice Johnson",
    designation: "Professor of Physics",
    image: "/images/researcher/researcher-03.jpg",
    content: "Research at IIT-Kanpur is paving the way for groundbreaking advancements in science and technology. Our efforts are aimed at making a global impact.",
  },
  {
    id: 2,
    name: "Dr. Bob Smith",
    designation: "Head of Chemistry Department",
    image: "/images/researcher/researcher-03.jpg",
    content: "Innovation and curiosity drive our research. At IIT-Kanpur, we are committed to pushing the boundaries of knowledge and solving real-world problems.",
  },
  {
    id: 3,
    name: "Dr. Carol White",
    designation: "Director of Research",
    image: "/images/researcher/researcher-03.jpg",
    content: "Our research initiatives are focused on creating sustainable solutions for the future. We believe in the power of collaboration and interdisciplinary research.",
  },
  {
    id: 4,
    name: "Dr. David Brown",
    designation: "Associate Professor of Engineering",
    image: "/images/researcher/researcher-03.jpg",
    content: "The research community at IIT-Kanpur is dedicated to excellence and innovation. We are constantly exploring new frontiers and making significant contributions to society.",
  },
];


const noteData: Note[] = [
  {
    id: "noteAlumni",
    title: "Note to Alumni",
    content: `Esteemed alumni are invited to stay connected with IIT-Kanpur. They can reach out via the
      provided mailing address or contact details to share and guide the institution about research
      opportunities, including internships. Alumni are encouraged to join the alumni WhatsApp
      community to remain connected and contribute to the IIT-Kanpur research network perpetually.`,
  },
  {
    id: "noteProfessors",
    title: "Note to Professors",
    content: `Distinguished professors are encouraged to stay in touch with IIT-Kanpur. They can connect
      through the provided contact details and mailing address to inform the institution about research
      opportunities and collaborations. Professors are invited to join the WhatsApp community to
      engage and contribute to the ongoing research initiatives at IIT-Kanpur.`,
  },
];

const ResearchGazetteHeader = {
  title: "Resources",
  subtitle: "Archive of Preparation Material",
  description: `This is mostly intended for keeping up your momentum from now onwards till tests and interviews, so that you don’t get depleted of preparation material at any stage.`,
};

const researchGazetteData = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Resume Repositories",
    description: "Links to resumes of seniors who have successfully secured positions in leading firms.",
    pdfUrl: "/pdfs/research-gazette-2023.pdf",
    year: 2023,
    area: "Technology",
  },
  {
    id: 2,
    icon: "/images/icon/icon-qc.svg",
    title: "Preparation Resources",
    description: "Resources for the students to prepare for internships and placements for various domains.",
    pdfUrl: "/pdfs/research-gazette-2022.pdf",
    year: 2022,
    area: "Science",
  },
  // Add more gazette data as needed
 
];

const CareerCHeader = {
    title: "CAREER CONNECT",
    subtitle: "Previous Years' Career Connect",
    description: `Details about our Annual Flagship event`,
  };
  
const CareerCData = [
    {
      id: 1,
      icon: "/images/icon/icon-01.svg",
      title: "CAREER CONNECT 2023",
      description: "Career Connect held in 2023.",
      pdfUrl: "#",
      year: 2023,
      area: "Technology",
    },
    {
      id: 2,
      icon: "/images/icon/icon-qc.svg",
      title: "CAREER CONNECT 2022",
      description: "Career Connect held in 2022.",
      pdfUrl: "#",
      year: 2022,
      area: "Science",
    },
    // Add more gazette data as needed
   
  ];
















const ResearchPage = () => {
  return (
    <div>
        <Banner banners={banners} 
      title="Welcome to IIT-Kanpur's Career Development Wing" 
      description={description} 
      socialLinks={socialLinks} />
        <ObjectivesSection title="Our Objectives" 
      objectives={objectives} />
        <Activities headerInfo={activitiesHeader} 
      activities={activitiesData} />
        <Team />
        <CalendarView calendarInfo={calendarInfo}/>
        <ResearchGazette headerInfo={ResearchGazetteHeader} data={researchGazetteData}/>
        <ResearchGazette headerInfo={CareerCHeader} data={CareerCData}/>
        <PastSessions  PastSessionsHeader={BlogsHeader} sessions={Blogs}/>
        <PastSessions PastSessionsHeader={PastSessionsHeader} sessions={sessions} />
        <DirectorNote headerInfo={headerInfo} quotes={quotes}/>
        <NoteSection notes={noteData}/>
        
      
    </div>
  );
};

export default ResearchPage;