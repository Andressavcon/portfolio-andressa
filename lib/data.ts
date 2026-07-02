export const navLinks = [
	{ href: "#about", label: "Sobre" },
	{ href: "#stack", label: "Stack" },
	{ href: "#work", label: "Experiência" },
	{ href: "#projects", label: "Projetos" },
	{ href: "#contact", label: "Contato" },
];

export const heroData = {
	eyebrow: "Desenvolvedora Full Stack",
	name: { first: "Andressa", last: "V. Conrado" },
	tagline: "Precisão de engenharia, aplicada ao software.",
	subTagline: "Java · Spring Boot · React · Next.js · TypeScript",
	description: `Desenvolvedora Full Stack com experiência em Java, Spring Boot, React, Next.js e TypeScript. Atuo no desenvolvimento de aplicações web internas na WEG, cobrindo frontend e backend com foco em qualidade de código e boas práticas.`,
};

export const aboutData = {
	paragraphs: [
		`Sou desenvolvedora Full Stack com background em <strong>Engenharia Civil</strong>. Essa formação me deu raciocínio analítico e atenção a requisitos que aplico diretamente no desenvolvimento de software.`,
		`Fiz transição para tecnologia em 2022 de forma autodirigida e hoje atuo na <strong>WEG</strong> desenvolvendo aplicações web internas, com responsabilidade sobre frontend e backend.`,
		`Trabalho com <strong>Java, Spring Boot, React, Next.js e TypeScript</strong>, aplicando boas práticas como SOLID, Design Patterns e testes automatizados. Tenho interesse crescente em <strong>Inteligência Artificial</strong> e como ela pode ser integrada a produtos reais.`,
	],
	stats: [
		{ number: "2+", label: "Sistemas em produção" },
		{ number: "8", label: "Idiomas no módulo de localização" },
		{ number: "IA", label: "Validação dimensional em fluxos CAD" },
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
		title: "Frontend",
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
			{ name: "JUnit / Mockito" },
			{ name: "JWT Auth" },
			{ name: "REST APIs", primary: true },
		],
	},
	{
		title: "Banco de Dados",
		tags: [
			{ name: "PostgreSQL", primary: true },
			{ name: "MongoDB", primary: true },
			{ name: "JPA / Hibernate" },
			{ name: "TypeORM" },
		],
	},
	{
		title: "IA & Automação",
		tags: [
			{ name: "Prompt Engineering", primary: true },
			{ name: "Integração com APIs de IA", primary: true },
			{ name: "Validação CAD" },
			{ name: "Sistemas de Fila" },
		],
	},
	{
		title: "Segurança & DevOps",
		tags: [
			{ name: "Keycloak (IAM)", primary: true },
			{ name: "Docker", primary: true },
			{ name: "GitLab CI/CD" },
			{ name: "Git" },
		],
	},
	{
		title: "Boas Práticas",
		tags: [
			{ name: "SOLID", primary: true },
			{ name: "Design Patterns", primary: true },
			{ name: "Clean Code" },
			{ name: "Git Flow" },
			{ name: "Scrum / Jira" },
		],
	},
	{
		title: "Domínio de Negócio",
		tags: [
			{ name: "Sistemas Estruturais" },
			{ name: "Fluxos Industriais" },
			{ name: "Processos CAD" },
			{ name: "Documentação Técnica" },
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
		company: "WEG Equipamentos Elétricos S.A.",
		role: "Desenvolvedora Full Stack | Engenharia de Produto",
		period: "Nov 2024 — Presente · Jaraguá do Sul, SC",
		bullets: [
			{
				text: `<strong>Desenvolvimento Full Stack:</strong> Desenvolvimento e entrega de aplicações web internas utilizando Java, Spring Boot, Next.js e TypeScript — com responsabilidade pelo frontend completo e participação no backend em todos os projetos.`,
			},
			{
				text: `<strong>Sistema de Documentação Técnica Multilíngue:</strong> Desenvolvimento de sistema multilíngue de documentação técnica com 8 idiomas, integração automática com sistemas corporativos internos, geração automatizada de PDFs e módulo de inteligência artificial (IA) para tradução automática e sugestão terminológica de termos técnicos.`,
			},
			{
				text: `<strong>Automação CAD:</strong> Implementação de módulo de validação automática de montagens CAD para motores elétricos, com sistema de fila, priorização e integração com sistemas internos. Criação de aplicação desktop em C#/.NET para comando de software CAD via API, executando montagens virtuais e análises automáticas.`,
			},
			{
				text: `<strong>Gestão de Dados Industriais:</strong> Desenvolvimento de aplicação que substituiu planilha Excel crítica para controle de dados técnicos de engenharia, com painel administrativo CRUD, tabela em tempo real e controle de acesso via Keycloak.`,
			},
		],
	},
	{
		company: "Autônomo",
		role: "Engenheira Civil | Projetos Estruturais em Light Steel Framing",
		period: "Dez 2020 — Dez 2022 · Remoto",
		bullets: [
			{
				text: `<strong>Projetos Estruturais:</strong> Dimensionamento e detalhamento de estruturas em Light Steel Framing (LSF), com modelagem 3D em Tekla Structures e Revit e entrega de pranchas técnicas para produção.`,
			},
			{
				text: `<strong>Automação de Processos:</strong> Criação de planilhas de cálculo para automatizar orçamentos e levantamento de quantitativos — base do interesse por lógica e automação que direcionou a transição para software.`,
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
		title: "Sistema de Documentação Técnica Multilíngue",
		badge: "Empresarial · Multilíngue · Em Produção",
		description:
			"Sistema web completo para gerenciamento de documentação técnica de engenharia, com suporte a 8 idiomas, integração automática com sistemas corporativos internos, geração automatizada de PDFs e módulo de inteligência artificial para tradução automática e sugestão terminológica de termos técnicos. Desenvolvido com Spring Boot 3 e Next.js 15, com persistência em PostgreSQL e MongoDB.",
		tags: [
			"Java · Spring Boot 3",
			"Next.js 15 · React 19",
			"PostgreSQL · MongoDB",
			"i18n · 8 Idiomas",
			"IA · Tradução Automática",
			"Integração Corporativa",
		],
		featured: true,
		stats: [
			{ number: "8", label: "Idiomas suportados" },
			{ number: "IA", label: "Sugestão terminológica" },
			{ number: "PDF", label: "Geração automatizada" },
		],
	},
	{
		title: "Gestão de Dados Industriais",
		badge: "Empresarial · Migração de Legado · Ferramenta Oficial",
		description:
			"Aplicação que substituiu planilha Excel crítica para controle de dados técnicos de engenharia. Desenvolvido o frontend completo e implementados novos endpoints no backend, entregando painel administrativo com CRUD completo, tabela de dados em tempo real e controle de acesso via Keycloak.",
		tags: [
			"Java · Spring Boot",
			"Next.js · TypeScript",
			"Ant Design",
			"PostgreSQL",
			"Keycloak",
		],
	},
	{
		title: "Automação de Validação CAD",
		badge: "Empresarial · Automação Industrial",
		description:
			"Módulo completo para validação automática de montagens CAD de motores elétricos. Implementado sistema de fila com priorização, monitoramento em tempo real e integração com sistemas internos, reduzindo tarefas manuais repetitivas do time de engenharia. Inclui aplicação desktop em C#/.NET para comando de software CAD via API, executando montagens virtuais e análises automáticas.",
		tags: [
			"Java · Spring Boot",
			"C# · .NET",
			"Next.js · TypeScript",
			"Sistemas de Fila",
		],
	},
	{
		title: "LFERREIRA — Site de Artista",
		badge: "Internacional · Alta Performance · Em Produção",
		description:
			"Plataforma internacional desenvolvida com foco em performance e impacto visual. Utiliza React 19 e Next.js 15 com animações em Framer Motion e arquitetura de i18n para alcance global.",
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
		period: "2020 — 2022",
		title: "Pós-graduação — Light Steel Framing & Wood Systems",
		institution: "ITIE · Especialização em Engenharia Estrutural",
	},
	{
		period: "2015 — 2019",
		title: "Bacharelado — Engenharia Civil",
		institution: "UCPel · Universidade Católica de Pelotas",
	},
];

export const contactData = {
	headline: {
		line1: "Vamos criar algo",
		line2: "que realmente funcione.",
	},
	subtext:
		"Aberta a oportunidades Full Stack em times que valorizam qualidade técnica e evolução contínua.",
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
	text: "Andressa V. Conrado · Desenvolvedora Full Stack · 2026",
};
