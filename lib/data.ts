export const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#stack", label: "Stack" },
	{ href: "#work", label: "Work" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

export const heroData = {
	eyebrow: "Full Stack Developer",
	name: { first: "Andressa", last: "V. Conrado" },
	tagline: "Engineering precision, applied to software.",
	subTagline: "Java · Spring Boot · React · Next.js · TypeScript",
	description: `I design and build enterprise-grade systems—from robust backends to high-precision frontends. As a Civil Engineer by training, I leverage a structural mindset and analytical rigor to develop resilient software architectures. Currently, I build the official platforms for engineering departments at a global industrial leader, driving efficiency and scalability across complex industrial workflows.`,
};

export const aboutData = {
	paragraphs: [
		`I'm a Full Stack Developer with an <strong>engineering mindset</strong>. My background in Civil Engineering with structural analysis, dimensional precision, systems that cannot fail shaped how I approach software: methodically, from architecture to the last detail.`,
		`I transitioned autonomously into tech in 2022, building expertise through self-directed study and applied production projects. Since then, I've been developing <strong>mission-critical enterprise systems</strong> at a global industrial company from full architecture design to deployment.`,
		`My work philosophy centers on <strong>zero-defect thinking</strong>, clean architecture, and systems that teams adopt, trust, and rely on long-term. I also apply <strong>Generative AI and Prompt Engineering</strong> to accelerate development workflows.`,
	],
	stats: [
		{ number: "2+", label: "Enterprise systems in production" },
		{ number: "120+", label: "Specialists in dept. presentation audience" },
		{ number: "8", label: "Languages in the localization module" },
		{ number: "AI-Driven", label: "Dimensional validation in CAD workflows" },
	],
};

export type SkillTag = {
	name: string;
	primary?: boolean;
};

export type SkillGroup = {
	title: string;
	tags: SkillTag[];
};

export const stackData: SkillGroup[] = [
	{
		title: "Frontend Mastery",
		tags: [
			{ name: "React 19", primary: true },
			{ name: "Next.js 15", primary: true },
			{ name: "TypeScript", primary: true },
			{ name: "Tailwind CSS" },
			{ name: "Framer Motion" },
			{ name: "Ant Design" },
		],
	},
	{
		title: "Backend & APIs",
		tags: [
			{ name: "Java", primary: true },
			{ name: "Spring Boot 3", primary: true },
			{ name: "Node.js" },
			{ name: "C#" },
			{ name: "JUnit/Mockito", primary: true },
			{ name: "JWT Auth" },
			{ name: "REST APIs" },
		],
	},
	{
		title: "Data Architecture",
		tags: [
			{ name: "PostgreSQL", primary: true },
			{ name: "MongoDB", primary: true },
			{ name: "SAP Integration", primary: true },
			{ name: "TypeORM" },
			{ name: "JPA / Hibernate" },
		],
	},
	{
		title: "AI & Automation",
		tags: [
			{ name: "Prompt Engineering", primary: true },
			{ name: "AI Pipelines", primary: true },
			{ name: "CAD Validation" },
			{ name: "Queue Systems" },
		],
	},
	{
		title: "Engineering Practices",
		tags: [
			{ name: "JUnit 5", primary: true },
			{ name: "Mockito", primary: true },
			{ name: "Clean Code" },
			{ name: "Design Patterns" },
			{ name: "Git Flow" },
			{ name: "Scrum" },
		],
	},
	{
		title: "Domain Knowledge",
		tags: [
			{ name: "Structural Systems" },
			{ name: "Industrial Workflows" },
			{ name: "CAD Processes" },
			{ name: "Technical Docs" },
		],
	},
];

export type JobBullet = {
	text: string;
};

export type Job = {
	company: string;
	role: string;
	period: string;
	bullets: JobBullet[];
};

export const workData: Job[] = [
	{
		company: "Global Industrial Manufacturing Co. (WEG)",
		role: "Full Stack Developer",
		period: "Nov 2024 — Present · Jaraguá do Sul, SC",
		bullets: [
			{
				text: `<strong>End-to-End Ownership:</strong> Architected and deployed mission-critical internal platforms, independently replacing years of legacy desktop tooling with scalable enterprise web solutions.`,
			},
			{
				text: `<strong>Global Systems Engineering:</strong> Spearheading the development of the "Intelligent Notes" platform using Spring Boot 3 and Next.js 15, featuring SAP integration, 8-language localization, and automated PDF generation.`,
			},
			{
				text: `<strong>AI & CAD Automation:</strong> Engineered an AI-driven CAD validation pipeline with automated dimensional verification and queue control, eliminating manual inspection workflows for electrical motor engineering.`,
			},
			{
				text: `<strong>Digital Transformation:</strong> Led the migration of critical industrial asset data from vulnerable legacy spreadsheets to a robust PostgreSQL/MongoDB infrastructure, ensuring 100% data traceability.`,
			},
			{
				text: `<strong>Technical Leadership:</strong> Identified architectural limitations in legacy systems and implemented structural improvements to ensure global scalability. Conducted a technical seminar for 120+ engineering specialists to drive tool adoption.`,
			},
		],
	},
	{
		company: "Autonomous",
		role: "Civil Engineer — Structural Design & Automation",
		period: "Dec 2020 — Dec 2022 · Remote",
		bullets: [
			{
				text: `<strong>Structural Engineering:</strong> Performed structural analysis and dimensioning for complex Light Steel Framing (LSF) systems, applying rigorous mathematical logic to ensure stability and integrity.`,
			},
			{
				text: `<strong>Early Automation:</strong> Developed custom calculation tools to automate material estimation and cost analysis, bridging the gap between structural logic and software-driven problem solving.`,
			},
		],
	},
];

export type Project = {
	title: string;
	badge: string;
	description: string;
	tags: string[];
	link?: string;
	featured?: boolean;
	stats?: { number: string; label: string }[];
};

export const projectsData: Project[] = [
	{
		title: "Intelligent Notes Ecosystem",
		badge: "Enterprise · SAP Integrated · Re-engineered",
		description:
			"Developed and re-engineered a mission-critical technical records platform to ensure enterprise-grade scalability. Identified and addressed structural limitations in the previous architecture, delivering a robust full-stack system with parameterized templates, SAP integration, 8-language localization, and automated PDF generation for engineering workflows.",
		tags: [
			"Java · Spring Boot 3",
			"Next.js 15 · React 19",
			"PostgreSQL · MongoDB",
			"SAP Integration",
			"i18n · 8 Languages",
		],
		featured: true,
		stats: [
			{ number: "AI-Driven", label: "Dimensional validation in CAD workflows" },
			{ number: "8", label: "Languages" },
			{ number: "Full", label: "Re-architecture" },
		],
	},
	{
		title: "Industrial Asset Management",
		badge: "Enterprise · Legacy Migration · Official Tool",
		description:
			"Spearheaded the digital transformation of rotor production tooling, migrating critical engineering data from legacy spreadsheets to a centralized PostgreSQL database. Developed a high-density management panel with complex filtering and a full administrative CRUD suite for real-time asset control.",
		tags: [
			"Java · Spring Boot",
			"Next.js · TypeScript",
			"Ant Design",
			"PostgreSQL",
		],
	},
	{
		title: "CAD Validation Automation",
		badge: "Enterprise · AI-Powered · Industry 4.0",
		description:
			"Engineered an automated pipeline for CAD assembly validation (SolidWorks) using AI-driven dimensional verification. Implemented real-time queue monitoring and collision analysis, significantly reducing manual inspection time and ensuring near-zero non-conformity rates in motor production.",
		tags: [
			"Java · Spring Boot",
			"AI Dimensional Logic",
			"Queue Systems",
			"SolidWorks API",
		],
	},
	{
		title: "LFERREIRA — Artist Website",
		badge: "International · High Performance · Production",
		description:
			"An official international platform engineered for extreme performance and visual impact. Leveraging React 19 and Next.js 15, the site features fluid Framer Motion animations and a robust SEO/i18n architecture for a global audience.",
		tags: ["Next.js 15", "React 19", "Framer Motion", "Tailwind CSS"],
		link: "https://www.lferreiralive.com.br",
	},
];

export type Education = {
	period: string;
	title: string;
	institution: string;
};

export const educationData: Education[] = [
	{
		period: "Starting Aug 2026",
		title: "Postgraduate — Software Engineering",
		institution: "PUC Minas · Distance Learning",
	},
	{
		period: "2022 — Present",
		title: "Self-directed Software Development",
		institution: "Bootcamps · Applied courses · Production at enterprise scale",
	},
	{
		period: "2020 — 2022",
		title: "Postgraduate — Light Steel Framing & Wood Systems",
		institution: "ITIE · Structural Engineering Specialization",
	},
	{
		period: "2015 — 2019",
		title: "Bachelor's Degree — Civil Engineering",
		institution: "UCPel · Universidade Católica de Pelotas",
	},
];

export const contactData = {
	headline: { line1: "Let's build something", line2: "worth engineering." },
	subtext:
		"Open to full stack roles in high-complexity environments. Especially drawn to teams building systems with real complexity, where engineering quality and architectural precision are non-negotiable.",
	links: [
		{
			icon: "✉",
			label: "andressavconrado@gmail.com",
			href: "mailto:andressavconrado@gmail.com",
		},
		{
			icon: "in",
			label: "linkedin.com/in/andressavcon",
			href: "https://linkedin.com/in/andressavcon",
		},
		{
			icon: "gh",
			label: "github.com/Andressavcon",
			href: "https://github.com/Andressavcon",
		},
	],
};

export const footerData = {
	text: "Andressa V. Conrado · Full Stack Developer · 2026",
};
