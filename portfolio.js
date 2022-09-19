import emoji from "react-easy-emoji";

export const greetings = {
	name: "Pranav Arya",
	title: "Hi all, I'm Pranav",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js  and some other cool libraries and frameworks. I also work on Machine Learning and Deep Learning",
	resumeLink:
		"/resume/Pranav.pdf",
};

export const openSource = {
	githubUserName: "pranav-iitr",
};

export const contact = {};

export const socialLinks = {
	url: "https://google.com",
	linkedin: "https://www.linkedin.com/in/pranav-arya-2673421b8/",
	github: "https://github.com/pranav-iitr",
	
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"A SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH THAT EXISTS",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		
		{
			title: "ML",
			lottieAnimationFile: "/lottie/skills/ai.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Learning New Machine Learning Algorithms"
				),
				emoji(
					"⚡ Deploying Machine Learning Models to make world a better place"
				),
				emoji(
					"⚡ Won First Prize in Inter IIT Tech Meet 10 in ML"
				),
				emoji(
					"⚡ Intragrating Machine Learning and Deep Learning Models with Web Applications"
				),
			],
			softwareSkills: [
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Jupyter",
					fontAwesomeClassname: "logos:jupyter",
				},
				{
					skillName: "openCv",
					fontAwesomeClassname: "logos:opencv",
				},
				{
					skillName: "YOLO",
					fontAwesomeClassname: "simple-icons:yolo",
				},
				{
					skillName: "Numpy",
					fontAwesomeClassname: "logos:numpy",
				},
			],
		},
	],
};

export const SkillBars = [
	// {
	// 	Stack: "Frontend/Design", //Insert stack or technology you have experience in
	// 	progressPercentage: "90", //Insert relative proficiency in percentage
	// },
	// {
	// 	Stack: "Backend",
	// 	progressPercentage: "70",
	// },
	// {
	// 	Stack: "Programming",
	// 	progressPercentage: "60",
	// },
];

export const educationInfo = [
	{
		schoolName: "IIT Roorkee",
		subHeader: "B.Tech ECE",
		duration: "Nov 2020 - May 2024",
		desc: "Undergraduate in Electronics and Communication Engineering with depp intrest in Machine Learning and AI",
		
		descBullets: [
			"Tech Head E-cell and Essumit IIT Roorkee",
			"Dev Head institute sports council IIT Roorkee",
			"Core TeamMember of ARIES IIT Roorkee",
		],
	},
];

export const experience = [

	{
		role: "Frontend Engineer Intern",
		company: "Mentor Plus ",
		companylogo: "/img/icons/common/mentor.jpg",
		date: "Feb 2022 – Apr 2022",
		desc: "",
		descBullets: [
			" Integrated multiple SDKs such as  Calendly, Razorpay and Google Auth, which helped acquire new users for the platform",
			" Developed dashboard, login, and demo workflow using NEXT.Js enhancing the user experience",
			" Upgraded UI and integrated cookies, which increased the sales conversion rate",
		],
	},
	{
		role: "Web Developer Intern",
		company: "Instaminutes",
		companylogo: "/img/icons/common/instaminutes.jpg",
		date: "Sept 2021 - Jan 2022",
		desc:" Worked in the integration of numerous APIs and libraries for Audio processing and its transmission to the backend, also made responsive UI using NEXT JS and SCSS, strengthening people's experience on the platform,also Integrated Google calendar to automatically  store meeting notes for online meetings reducing time to search for notes.",
		
	},
	
];

export const projects = [
	{
		name: "Traffic violation detection system",
		desc: " Developed a Deep Learning model based on the Yolo algorithm to detect traffic offenders, further we used OpenCV for image processing and data expansion hosted on djnago.",
		github: "https://github.com/pranav-iitr/traffic",

	},
	{
		name: "Essumit Portal",
		desc: "Official website of Essumit IIT Roorkee catring 2000+ delegates and 1500+ Campus Ambassadors  using Django and Django Rest aslo Made website SEO using NEXT SEO and insights from Google analytics, brought it to the top search result",
		link: "https://www.esummit.in/",
	},
];

export const feedbacks = [
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "PranavArya",
	description:
		"A passionate Full Stack Web Developer and Machine Learning enginner.",
	author: "Pranav Arya",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	
	keywords: [
		"Pranav Arya",
		"Pranav ",
		"Portfolio",
		"ecell",
		"e-cell",
		"ecell IIT Roorkee",
		"e-cell IIT Roorkee",
	],

}
