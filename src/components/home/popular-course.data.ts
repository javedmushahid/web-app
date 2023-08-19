// import type { Course } from '@/interfaces/course'

// export const data: Array<Course> = [
//   {
//     id: 1,
//     cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',//     title: 'Android Development from Zeo to Hero',
//     rating: 5,
//     ratingCount: 8,
//     price: 25,
//     category: 'Beginner',
//   },
//   {
//     id: 2,
//     cover: '/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg',//     title: 'UI/UX Complete Guide',
//     rating: 5,
//     ratingCount: 15,
//     price: 20,
//     category: 'Intermediate',
//   },
//   {
//     id: 3,
//     cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',//     title: 'Mastering Data Modeling Fundamentals',
//     rating: 4,
//     ratingCount: 7,
//     price: 30,
//     category: 'Beginner',
//   },
//   {
//     id: 4,
//     cover: '/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg',//     title: 'The Complete Guide Docker and Kubernetes',
//     rating: 4,
//     ratingCount: 12,
//     price: 30,
//     category: 'Intermediate',
//   },
//   {
//     id: 5,
//     cover: '/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg',//     title: 'Modern React with MUI & Redux',
//     rating: 4,
//     ratingCount: 32,
//     price: 35,
//     category: 'Intermediate',
//   },
//   {
//     id: 6,
//     cover: '/images/courses/stillness-inmotion-YSCCnRGrD-4-unsplash.jpg',//     title: 'Ethical Hacking Bootcamp Zero to Mastery',
//     rating: 5,
//     ratingCount: 14,
//     price: 35,
//     category: 'Beginner',
//   },
//   {
//     id: 7,
//     cover: '/images/courses/grovemade-RvPDe41lYBA-unsplash.jpg',//     title: 'Adobe Lightroom For Beginners: Complete Photo Editing',
//     rating: 4,
//     ratingCount: 6,
//     price: 25,
//     category: 'Beginner',
//   },
// ]
import type { Project } from '@/interfaces/course'

export const data: Array<Project> = [
  {
    id: 1,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'E-commerce Platform for XYZ Electronics',
    description:
      'Developed a robust e-commerce platform for XYZ Electronics, enabling them to showcase and sell their products online. Integrated secure payment gateways and user-friendly navigation.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    client: 'XYZ Electronics',
    completionYear: 2022,
  },
  {
    id: 2,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'AI-Powered Customer Support Chatbot for ABC Bank',
    description:
      'Built an AI-driven chatbot for ABC Bank to enhance customer support. Utilized natural language processing to handle customer inquiries and provide instant responses.',
    technologies: ['Python', 'TensorFlow', 'Chatbot API'],
    client: 'ABC Bank',
    completionYear: 2023,
  },
  {
    id: 3,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'Data Analytics Dashboard for Global Logistics',
    description:
      'Designed and implemented a data analytics dashboard for a global logistics company. Enabled real-time tracking, data visualization, and performance analysis.',
    technologies: ['Tableau', 'SQL', 'Python'],
    client: 'Global Logistics Inc.',
    completionYear: 2021,
  },
  {
    id: 4,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'Mobile App for Fitness Tracking and Nutrition',
    description:
      'Developed a mobile app for fitness enthusiasts, allowing users to track workouts, monitor nutrition, and set personalized goals. Achieve your health goals with ease!',
    technologies: ['React Native', 'Firebase', 'Redux'],
    client: 'Fitness Innovations',
    completionYear: 2022,
  },
  {
    id: 5,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'Blockchain-Based Supply Chain Management',
    description:
      'Implemented a blockchain solution for transparent supply chain management. Increased traceability, reduced fraud, and ensured authenticity across the supply network.',
    technologies: ['Ethereum', 'Smart Contracts', 'Solidity'],
    client: 'SupplyChain Co.',
    completionYear: 2021,
  },
  {
    id: 6,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'Responsive Web App for Online Learning',
    description:
      'Developed a user-friendly web app for an online learning platform. Engaging UI, interactive quizzes, and seamless content delivery for a modern educational experience.',
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    client: 'EduConnect',
    completionYear: 2023,
  },
  {
    id: 7,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'VR Training Simulation for Industrial Safety',
    description:
      'Created a virtual reality training simulation for industrial safety procedures. Immersive training experience, risk-free learning, and enhanced workplace safety awareness.',
    technologies: ['Unity', 'C#', 'VR Development'],
    client: 'SafetyTech Industries',
    completionYear: 2022,
  },
  {
    id: 8,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'Cloud-Based HR Management System',
    description:
      'Designed a cloud-based HR management system for streamlined employee onboarding, performance tracking, and payroll management. Simplify HR processes with a modern solution.',
    technologies: ['AWS', 'Node.js', 'React'],
    client: 'HR Solutions Ltd.',
    completionYear: 2023,
  },
  {
    id: 9,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'Personalized Content Recommendation Engine',
    description:
      'Built an AI-driven content recommendation engine for a media streaming service. Enhance user engagement and satisfaction through personalized content suggestions.',
    technologies: ['Python', 'Machine Learning', 'TensorFlow'],
    client: 'StreamMedia Inc.',
    completionYear: 2021,
  },
  {
    id: 10,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    name: 'Enterprise-Level Microservices Architecture',
    description:
      'Implemented a microservices architecture for a large enterprise, enhancing scalability, fault tolerance, and maintainability. A robust foundation for future growth.',
    technologies: ['Docker', 'Kubernetes', 'Java'],
    client: 'Global Enterprises Ltd.',
    completionYear: 2023,
  },
  // ... You can add more projects following a similar structure
]
