import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'WeBucket ⭐',
    description: 'A full-stack social media web app for collaborative bucket lists with secure user login, CI/CD pipelines, scalable RESTful services, and 100% test coverage.',
    technologies: ['React', 'FastAPI', 'Supabase', 'Agile', 'SQL'],
    link: 'https://bitbucket.org/we-bucket/workspace/projects/',
  },
  {
    id: 2,
    title: 'Finance Tracker',
    description: 'Built a full-stack Finance Tracker web app with Python, Django, PostgreSQL, and JavaScript, featuring budgeting, expense categorization, transaction history, REST APIs, and interactive dashboards for analyzing spending habits and financial trends.',
    technologies: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
    link: 'https://github.com/Keithy111/cs412/tree/master/project',
  },
  {
    id: 3,
    title: 'Meal + Music',
    description: 'A full-stack app featuring an auth-backed REST API for managing recipes and playlists, with Spoonacular and Spotify integrations to generate personalized meals and curated music.',
    technologies: ['React', 'Python', 'Flask', 'MongoDB'],
    link: 'https://github.com/Keithy111/Meal-Music',
  },
  {
    id: 4,
    title: 'OCaml Interpreter',
    description: 'Built an OCaml Interpreter supporting parsing, AST generation, and execution of a high-level language with features like arithmetic, functions, let-bindings, conditionals, sequences, trace statements, and basic error handling.',
    technologies: ['OCaml'],
  }
];