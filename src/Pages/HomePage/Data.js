 
 
 
 
const skills =  [
    {
        name: 'JavaScript',
        img: './techicons/JavaScript-logo.png',
        alt: 'JavaScript'
    },
    {
        name: 'HTML 5',
        img: './techicons/iconfinder_HTML.png',
        alt: 'HTML'
    },
    {
        name: 'CSS 3',
        img: './techicons/iconfinder_css3.png',
        alt: 'CSS'
    },
    {
        name: 'React.Js',
        img: './techicons/iconfinder_React.js.png',
        alt: 'React'
    },
    {
        name: 'Node.js',
        img: './techicons/iconfinder_Node_Js.png',
        alt: 'Node'
    },
    {
        name: 'Express',
        img: './techicons/express-logo.png',
        alt: 'Express'
    },
    {
        name: 'JQuery',
        img: './techicons/iconfinder_JQuery.png',
        alt: 'JQuery'
    },
    {
        name: 'PostgreSQL',
        img: './techicons/Postgres-logo.png',
        alt: 'PostgreSQL'
    },
    {
        name: 'GitHub',
        img: './techicons/github-logo.png',
        alt: 'Github'
    },
    {
        name: 'Heroku',
        img: './techicons/heroku-logo.png',
        alt: 'Heroku'
    },
    {
    name: 'Mocha',
    img: './techicons/mocha-logo.png',
    alt: 'Mocha'
    },
    {
        name: 'Chai',
        img: './techicons/chai-logo.png',
        alt: 'chai'
    }]
 
 const projects = [
   
     {
         name:'Divvy Budget',
         description: 'A simple, easy to use app that allows you to manage your bills for the month as well as track long-term debt.',
         technology:['React', 'BCrypt', 'JWT', 'Express', 'Node.js', "K'Nex", 'PostgreSQL', 'CSS'],
         date:'Jan 2021',
         image:'./projects/divvydash.jpg',
         live:'https://divvy.vercel.app/',
         repo:'https://github.com/apullenb/MyBudgetApp'
    },

{
    name:'Petful',
    description: 'A fictional pet adoption app demonstrating a double-linked list data structure used to manage an adoption list',
    technology:['React', 'Node.js', 'Express', 'JavaScript', 'CSS' ],
    date:'Dec 2020',
    image:'./projects/Petful.png',
    live:'https://petful-topaz.vercel.app/',
    repo:'https://github.com/apullenb/Petful'
}, 
{
    name:'Mindful',
    description: 'A journaling app used to track daily habits and emotions in order to identify the impact of daily choices on overall mental health',
    technology:['React', 'BCrypt', 'JWT', 'Express', 'Node.js', "K'Nex", 'PostgreSQL', 'CSS'],
    date:'Sept 2020',
    image:'./projects/mindfuldash.png',
    live:'https://mindful-murex.vercel.app/',
    repo:'https://github.com/apullenb/mindful-app'
},
 ]
 
 const sections = [ 
    {
    theme: 'manilla',
    headline: 'About Me',
    description: `My passion is helping businesses grow and being a part of their success. After years of working with WordPress and excelling at SEO, I wanted to dive deeper into programming and development, so I recently completed an intense programming course in order to expand my JavaScript skills and learn other skills as well. 

    I am internally motivated and always eager to learn or improve. The best part about programming is the challenges that it provides, and the fact that there is always more to learn. My love of programming began when I was a kid and my dad bought a computer with a DOS operating system. While my brothers used it for games, I was fascinated by the fact that the machine had a language of its own and that I could learn to communicate with it. In high school, I signed up for every web development course that was offered, and have been doing web design both professionally and as a hobby ever since. 
    
    Expanding my programming skills has allowed me to create applications that help businesses run more efficiently and further improve user experience`,
    imgStart: '',
    img:'/images/img8.jpg',
    alt: 'image',
    items: ''
},

 {
    theme: 'dkBlue',
    headline: 'Projects',
    imgStart: '',
    img:'/images/img2.jpg',
    alt: 'image',
    items: projects
},
 {
    theme: 'orange',
    topLine: 'Full Stack Developer',
    headline: 'Skills',
    buttonLabel: 'Contact Me',
    imgStart: 'start',
    img:'/images/img3.jpg',
    alt: 'image',
    items: skills
},
]


export default sections