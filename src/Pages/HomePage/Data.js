const skills = [
  {
    name: "JavaScript",
    img: "./techicons/JavaScript-logo.png",
    alt: "JavaScript",
  },
  {
    name: "HTML 5",
    img: "./techicons/iconfinder_HTML.png",
    alt: "HTML",
  },
  {
    name: "CSS 3",
    img: "./techicons/iconfinder_css3.png",
    alt: "CSS",
  },
  {
    name: "C#",
    img: "./techicons/c-sharp-logo.png",
    alt: "C Sharp",
  },
  {
    name: "React.Js",
    img: "./techicons/iconfinder_React.js.png",
    alt: "React",
  },
  {
    name: "Node.js",
    img: "./techicons/iconfinder_Node_Js.png",
    alt: "Node",
  },
  {
    name: "Angular",
    img: "./techicons/angular-logo.png",
    alt: "Angular",
  },
  {
    name: "SQL",
    img: "./techicons/sql-logo.png",
    alt: "PostgreSQL",
  },
  {
    name: "PostgreSQL",
    img: "./techicons/postgres-logo.png",
    alt: "PostgreSQL",
  },
  {
    name: "Express",
    img: "./techicons/express-logo.png",
    alt: "Express",
  },
  
  {
    name: "JQuery",
    img: "./techicons/iconfinder_JQuery.png",
    alt: "JQuery",
  },

  {
    name: "GitHub",
    img: "./techicons/github-logo.png",
    alt: "Github",
  },

  {
    name: "Mocha",
    img: "./techicons/mocha-logo.png",
    alt: "Mocha",
  },
  {
    name: "Chai",
    img: "./techicons/chai-logo.png",
    alt: "chai",
  },
];

const projects = [
  {
    name: "Password Reset Service",
    description:
      "SendGrid's email API is commonly used for email automation. Due to security reasons, their email API can't be called from the front-end, it must be wrapped in a backend service. This is an example of a password reset service using Node to wrap SendGrid's email API.",
    technology: [
      "Node.js",
      "BCrypt",
      "JWT",
      "Express",
      "K'Nex",
    ],
    date: "Sept 2020",
    image: "./projects/curl-windows.png",
    repo: "https://github.com/apullenb/Password-Reset",
  },
  {
    name: "Divvy Budget",
    description:
      "A simple, easy to use app that allows you to manage your bills for the month as well as track long-term debt. This app was designed to model a budget spreadsheet given to me by a financial advisor.",
    technology: [
      "React",
      "BCrypt",
      "JWT",
      "Express",
      "Node.js",
      "K'Nex",
      "PostgreSQL",
      "CSS",
    ],
    date: "Jan 2021",
    image: "./projects/divvydash.jpg",
    live: "https://divvy.vercel.app/",
    repo: "https://github.com/apullenb/MyBudgetApp",
  },

  {
    name: "Petful",
    description:
      "A fictional pet adoption app created as a fun way to demonstrate a double-linked list data structure. In this case it is used to manage the adoption list",
    technology: ["React", "Node.js", "Express", "JavaScript", "CSS"],
    date: "Dec 2020",
    image: "./projects/Petful.png",
    live: "https://petful-topaz.vercel.app/",
    repo: "https://github.com/apullenb/Petful",
  },
  {
    name: "Mindful",
    description:
      "A journaling app used to track daily habits and emotions in order to identify the impact of daily choices on overall mental health. I created this app for my kids as a fun way to help them make healthier choices, and to have a fun place to journal.",
    technology: [
      "React",
      "BCrypt",
      "JWT",
      "Express",
      "Node.js",
      "K'Nex",
      "PostgreSQL",
      "CSS",
    ],
    date: "Sept 2020",
    image: "./projects/mindfuldash.png",
    live: "https://mindful-murex.vercel.app/",
    repo: "https://github.com/apullenb/mindful-app",
  }
  
];

const sections = [
  {
    theme: "manilla",
    headline: "About Me",
    description: ` My love of programming started in 2nd grade when my dad brought home an old computer. I was fascinated by it and loved spending time with him while he shared his knowledge of DOS and Basic. Coding has been a part of my life ever since, both professionally and as a hobby. After years of working with small businesses, helping them grow through web design & internet marketing, I decided to narrow my focus and concentrate on programming. In order to expand my skills and learn new technologies, I completed an intense training program and starting working full time as a software developer, and have worked on many side projects as well. `,
    description2: ` Being internally motivated and always eager to learn or improve, I look forward to joining a team to create and collaborate with other developers while continuing to learn new technologies! `,
    description3: ` When I am not coding or planning my next project, I enjoy spending time with my kids who share my love of all things retro. On the weekends, you can usually find us sifting through thrift stores or antique shops looking for rare finds.`,
    sign: "~ Andrea Pullen",
    imgStart: "",
    img: "/images/img13.jpg",
    img2: "/images/retroback.jpg",
    img3: "/images/img8.jpg",
    alt: "image",
    items: "",
  },

  {
    theme: "dkBlue",
    headline: "Projects",
    imgStart: "start",
    img: "/images/img2.jpg",
    alt: "image",
    items: projects,
  },
  {
    theme: "orange",
    topLine: "Full Stack Developer",
    headline: "Skills",
    buttonLabel: "Contact Me",
    imgStart: "start",
    img: "/images/img9.jpg",
    alt: "image",
    items: skills,
  },
];

export default sections;
