export const resume = {
  about:
    'Short bio about you. Replace this with your own summary highlighting your strengths and interests.',
  experience: [
    {
      company: 'Company Name',
      title: 'Job Title',
      start: '2023',
      end: 'Present',
      summary:
        'One-liner about your role, impact, and the teams/tech you worked with.',
      highlights: [
        'Led X to achieve Y',
        'Improved Z metric by N%',
        'Built A using B and C',
      ],
    },
  ],
  projects: [
    {
      name: 'Project One',
      description: 'What it does and why it matters.',
      url: 'https://example.com',
      tags: ['React', 'TypeScript', 'Vite'],
    },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'GitHub Actions'],
  education: [
    {
      school: 'Your University',
      degree: 'B.S. in Something',
      year: '2022',
      details: 'Any honors or relevant coursework.',
    },
  ],
} as const