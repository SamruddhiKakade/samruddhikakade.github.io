// Groups for the Skills page. Only skills that some page uses are shown; any skill not listed here
// falls into "Other".
export const skillGroups = [
  {
    name: 'Programming',
    skills: ['Python', 'R', 'C', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'NumPy'],
  },
  {
    name: 'AI and machine learning',
    skills: [
      'Machine learning', 'Generative AI', 'Azure OpenAI', 'Prompt engineering', 'RAG', 'scikit-learn',
      'Neural networks', 'Model selection', 'Model evaluation', 'Cross-validation', 'Gradient descent', 'Text classification',
      'Naive Bayes', 'Language models', 'Information theory', 'NLTK', 'Simulated annealing', 'Multi-armed bandits',
      'Optimisation',
    ],
  },
  {
    name: 'Search and speech',
    skills: ['Information retrieval', 'TF-IDF', 'Scrapy', 'Azure Cognitive Search', 'Azure Speech', 'Speech-to-text'],
  },
  {
    name: 'Data',
    skills: [
      'Data pipelines', 'Data quality', 'Metadata design', 'Data cleaning', 'Exploratory analysis',
      'Data visualisation', 'Network analysis', 'Gephi', 'Tweepy', 'MongoDB', 'Statistics',
    ],
  },
  {
    name: 'Software and cloud',
    skills: [
      'Flask', 'Django', 'Backend development', 'Data modelling', 'Systems programming', 'Database internals',
      'Memory management', 'Azure Blob Storage', 'Responsive design', 'Accessibility', 'Git',
    ],
  },
  {
    name: 'Research, analysis and communication',
    skills: [
      'Experiment design', 'Requirements and design', 'Market research', 'Cost analysis', 'Technical writing', 'Research posters',
      'Critical analysis', 'Game design', 'Playtesting', 'Visual design',
    ],
  },
  {
    name: 'Working with people',
    skills: ['Stakeholder collaboration', 'Team leadership', 'Sprint leadership', 'Agile', 'Presenting', 'Teamwork'],
  },
];

// Overview's short list: a few skills per group, chosen for research and AI-engineer applications.
export const featuredSkills: Record<string, string[]> = {
  Programming: ['Python', 'R', 'C'],
  'AI and machine learning': ['Language models', 'RAG', 'Generative AI', 'Text classification', 'Model selection', 'Neural networks'],
  'Search and speech': ['Information retrieval', 'Speech-to-text'],
  Data: ['Data pipelines', 'Metadata design', 'Data quality', 'Network analysis'],
  'Software and cloud': ['Django', 'Flask', 'Systems programming'],
  'Research, analysis and communication': ['Experiment design', 'Technical writing', 'Game design'],
  'Working with people': ['Stakeholder collaboration', 'Team leadership'],
};
