 
 
 
 
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
        img: './techicons/postgres-logo.png',
        alt: 'Postgres'
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
         technology:['React', 'BCrypt', 'JWT', 'Express', 'Node.js', "K'Nex", 'Postgres', 'CSS'],
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
    technology:['React', 'BCrypt', 'JWT', 'Express', 'Node.js', "K'Nex", 'Postgres', 'CSS'],
    date:'Sept 2020',
    image:'./projects/mindfuldash.png',
    live:'https://mindful-murex.vercel.app/',
    repo:'https://github.com/apullenb/mindful-app'
},
 ]
 
 const sections = [ 
    {
    theme: 'manilla',
    topLine: 'Full Stack Developer',
    headline: 'About Me',
    description: 'lots of things and stuff',
    buttonLabel: 'Contact Me',
    imgStart: '',
    img:'/images/img1.jpg',
    alt: 'image',
    items: ''
},
 {
    theme: 'orange',
    topLine: 'Full Stack Developer',
    headline: 'Skills',
    description: 'lots of things and stuff',
    buttonLabel: 'Contact Me',
    imgStart: 'start',
    img:'/images/img3.jpg',
    alt: 'image',
    items: skills
},
 {
    theme: 'dkBlue',
    topLine: 'Full Stack Developer',
    headline: 'Projects',
    description: 'lots of things and stuff',
    buttonLabel: 'Contact Me',
    imgStart: '',
    img:'/images/img2.jpg',
    alt: 'image',
    items: projects
}
]


export default sections