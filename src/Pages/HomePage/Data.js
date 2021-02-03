 
 
 
 
const skills =  [
    {
        name:'JavaScript',
        img:'./techicons/JavaScript-logo.png',
        alt:'JavaScript'
    },
    {
        name:'HTML 5',
        img:'./techicons/iconfinder_HTML.png',
        alt:'HTML'
    },
    {
        name:'CSS 3',
        img:'./techicons/iconfinder_css3.png',
        alt:'CSS'
    },
    {
        name:'React.Js',
        img:'./techicons/iconfinder_React.js.png',
        alt:'React'
    },
    {
        name:'Node.js',
        img:'./techicons/iconfinder_Node_Js.png',
        alt:'Node'
    },
    {
        name:'Express',
        img:'./techicons/express-logo.png',
        alt:'Express'
    },
    {
        name:'JQuery',
        img:'./techicons/iconfinder_JQuery.png',
        alt:'JQuery'
    },
    {
        name:'PostgreSQL',
        img:'./techicons/postgres-logo.png',
        alt:'PostgreSQL'
    },
    {
        name:'GitHub',
        img:'./techicons/github-logo.png',
        alt:'Github'
    },
    {
        name:'Heroku',
        img:'./techicons/heroku-logo.png',
        alt:'Heroku'
    },
    {
    name:'Mocha',
    img:'./techicons/mocha-logo.png',
    alt:'Mocha'
    },
    {
        name:'Chai',
        img:'./techicons/chai-logo.png',
        alt:'chai'
    }]
 
 const projects = [
   
     {
         name:'Divvy Budget',
         description:'A simple, easy to use app that allows you to manage your bills for the month as well as track long-term debt. This app was designed to model a budget spreadsheet given to me by a financial advisor.',
         technology:['React', 'BCrypt', 'JWT', 'Express', 'Node.js', "K'Nex", 'PostgreSQL', 'CSS'],
         date:'Jan 2021',
         image:'./projects/divvydash.jpg',
         live:'https://divvy.vercel.app/',
         repo:'https://github.com/apullenb/MyBudgetApp'
    },

{
    name:'Petful',
    description:'A fictional pet adoption app created as a fun way to demonstrate a double-linked list data structure. In this case it is used to manage the adoption list',
    technology:['React', 'Node.js', 'Express', 'JavaScript', 'CSS' ],
    date:'Dec 2020',
    image:'./projects/Petful.png',
    live:'https://petful-topaz.vercel.app/',
    repo:'https://github.com/apullenb/Petful'
}, 
{
    name:'Mindful',
    description:'A journaling app used to track daily habits and emotions in order to identify the impact of daily choices on overall mental health. I created this app for my kids as a fun way to help them make healthier choices, and to have a fun place to journal.',
    technology:['React', 'BCrypt', 'JWT', 'Express', 'Node.js', "K'Nex", 'PostgreSQL', 'CSS'],
    date:'Sept 2020',
    image:'./projects/mindfuldash.png',
    live:'https://mindful-murex.vercel.app/',
    repo:'https://github.com/apullenb/mindful-app'
},
 ]
 
 const sections = [ 
    {
    theme:'manilla',
    headline:'About Me',
    description:`My passion is helping businesses grow and being a part of their success through strategic internet marketing. After years of working with small businesses and startups, I decided to narrow my focus and concentrate on coding and development, so I completed an intense training program to expand my programming skills.`, 
    description2:`My love of coding began when I was a kid and my dad bought a computer with a DOS operating system. In high school, I signed up for every web development course that was offered, and have been doing web design both professionally and as a hobby ever since.`, 
    description3:`I am internally motivated and always eager to learn or improve. I look forward to joining a team to create and collaborate with other developers. When I am not coding or planning my next project, you can find me spending time with my kids who share my love of all things retro. On the weekends, we enjoy sifting through thrift stores or antique shops looking for rare finds.`,
    sign:'~ Andrea Pullen',
    imgStart:'',
    img:'/images/img8.jpg',
    img2:'/images/retroback.jpg',
    img3:'/images/img13.jpg',
    alt:'image',
    items:''
},

 {
    theme:'dkBlue',
    headline:'Projects',
    imgStart:'',
    img:'/images/img2.jpg',
    alt:'image',
    items:projects
},
 {
    theme:'orange',
    topLine:'Full Stack Developer',
    headline:'Skills',
    buttonLabel:'Contact Me',
    imgStart:'start',
    img:'/images/img9.jpg',
    alt:'image',
    items:skills
},
]


export default sections