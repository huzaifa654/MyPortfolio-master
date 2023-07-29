/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Muhammad Huzaifa",
  logo_name: "huzaifa.()",
  nickname: "huzaifa",
  full_name: "Muhammad Huzaifa",
  subTitle:
    "React Native Developer 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/drive/my-drive?ths=true",
  mail: "huzaifaubit@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/huzaifa654",
  linkedin: "https://www.linkedin.com/in/muhammad-huzaifa102/",
  gmail: "huzaifaubit@gmail.com",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com/muhmmad___huzaifa/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Mongodb",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },

        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },


        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Karachi University(UBIT)",
      subtitle: "Bachelor in Computer Science",
      logo_path: "UBIT.jpg",
      alt_name: "SSEC",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I will complete my Bachelor degree in 2024.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have worked on various mobile applications which are live in playstore and appstore ",
      ],
      website_link: "https://uok.edu.pk/faculties/computerscience/ubit.php",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Internship",
      subtitle: "Certificate of appereciation  from Visech",
      logo_path: "coursera.png",
      certificate_link:
        "https://coursera.org/verify/6P9T2EAPD6YV",
      alt_name: "Coursera",
      color_code: "#0056D2",
      // color_code: "#47A048",
    },
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internships.Currently working as a full time React Native Developer in Linkitsoft.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "React Native Developer",
          company: "Linkitsoft",
          company_url: "https://linkitsoft.com/",
          logo_path: "link.jpg",
          duration: "Sep 2020 - Oct 2020",
          location: "Office",
          description: `To be Added This site is undermaintainance
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#3644af",
        },
        {
          title: "React Native Developer",
          company: "Visech",
          company_url:
            "https://visech.com/",
          logo_path: "visech.jpg",
          duration: "Jan 2022 - Oct 2022",
          location: "Office",
          description: `To be Added This site is undermaintainance
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Native Frontend Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub  yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "huzaifa.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Uber_eats Clone",
      url: "https://github.com/huzaifa654/Uber_eats",
      description:
        "Uber Eats Clone is a food delivery app, built with Redux, Yelp API, Google API, Firebase and React Native. It allows users to browse and order food from local restaurants",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "MJC",
      url: "https://play.google.com/store/apps/details?id=com.jes_m&hl=en_US",
      description:
        "It is a tourism app live on the google play store which helps tourist to explore tourism.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "CryptoCurrnecy App",
      url: "https://github.com/huzaifa654/cryptocurrency",
      description:
        "cryptocurrency app built in React Native (RN) provides real-time data, transaction history, and market analysis for managing cryptocurrency investments.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "NFT Market Place",
      url: "https://github.com/huzaifa654/NFTMarketPlace",
      description:
        "The NFT marketplace app is built in React Native and displays NFTs using dummy data. It allows users to browse and purchase NFTs using a user friendly interface ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Coffe Shop",
      url: "https://github.com/huzaifa654/CoffeShop",
      description:
        "This mobile app offers a delightful coffee-ordering  experience with a user-friendly interface and arange of features.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },


  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
