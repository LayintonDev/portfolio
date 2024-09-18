import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hoobank,
  trendit,
  mediquick,
  jobit,
  tripguide,
  threejs,
  gonachi,
  femlad,
  mubdeen,
  mubdeen1,
  dart,
  flutter,
  fiver,
  quickdrop,
  finterest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Lead Frontend Developer",
    company_name: "QuickDrop",
    icon: quickdrop,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Finterest Capital",
    icon: finterest,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web and mobile applications using Flutter framework and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: fiver,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web, mobile and backend servers using React.js, Flutter, Node js, Firebase  and other related technologies.",

      "Implementing responsive design, ensuring cross-browser compatibility and developing secure and scalable backend servers for various clients around the world",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Finterest Capital",
    description:
      "Stock Advisory Web app built for an indian company. It is built with Flutter and Dart. It helps user get stock recommendations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: finterest,
    github_link: "#",
    source_code_link: "https://dashboard.finterestcapital.com/",
  },
  {
    name: "Mubdeen Telecoms",
    description:
      "A VTU and utility payment gateway. It provides an easy and secure way for users to pay their utilities and VTU. ",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "node js/koa.js",
        color: "green-text-gradient",
      },
      {
        name: "postgress",
        color: "pink-text-gradient",
      },
    ],
    image: mubdeen1,
    github_link: "#",
    source_code_link: "https://mubdeentelecoms.com/",
  },
  {
    name: "FemladTech",
    description:
      "A VTU and utility payment gateway. It provides an easy and secure way for users to pay their utilities and VTU. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: femlad,
    github_link: "#",
    source_code_link: "https://www.femladtech.com/",
  },
  {
    name: "Finterest Capital Mobile App",
    description:
      "Stock Advisory Web app built for an indian company. It is built with Flutter and Dart. It helps user get stock recommendations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "postgress",
        color: "pink-text-gradient",
      },
      {
        name: "koa.js",
        color: "green-text-gradient",
      },
    ],
    image: finterest,
    github_link: "#",
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.ar.finterest.finterest&hl=id",
  },
  {
    name: "Mubdeen Telecoms Mobile App",
    description:
      "A VTU and utility payment gateway. It provides an easy and secure way for users to pay their utilities and VTU. ",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "node js/koa.js",
        color: "green-text-gradient",
      },
      {
        name: "postgress",
        color: "pink-text-gradient",
      },
    ],
    image: mubdeen,
    github_link: "#",
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.mubdeentelecoms&hl=id",
  },
  {
    name: "Gonachi Mobile App",
    description:
      "A webview based app for a reputable real estate company. It provides a platform where property owners can meet with prospective buyers.It is built with Flutter. ",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
    ],
    image: gonachi,
    github_link: "#",
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.gonachi&hl=id",
  },
  {
    name: "Trend itt",
    description:
      "A Simple web clone of meta thread that allows users to post threads. ",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: trendit,
    github_link: "https://github.com/LayintonDev/trendit",
    source_code_link: "https://trenditt.vercel.app/",
  },
  {
    name: "MediQuick",
    description:
      "A Next js based web application for booking appointments with doctors.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: mediquick,
    github_link: "https://github.com/LayintonDev/Mediquick",
    source_code_link: "https://mediquick.vercel.app/",
  },
  {
    name: "ModernBank",
    description:
      "A banking website landing page illustrating the elegant design and user experience. ",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hoobank,
    github_link: "https://github.com/LayintonDev/modern_bank_landing_page",
    source_code_link: "https://modernbank.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
