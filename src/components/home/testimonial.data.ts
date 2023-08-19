import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Revolutionized Our Online Store',
    content:
      'Working with your team has been a game-changer for us. The e-commerce platform you developed for us has significantly enhanced our online store, leading to increased sales and improved customer satisfaction.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'CEO, XYZ Electronics',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'AI Chatbot Boosted Customer Support',
    content:
      'The AI-powered chatbot you implemented has revolutionized our customer support. It handles inquiries swiftly and efficiently, providing our customers with instant assistance. A big win for our company!',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'CTO, ABC Bank',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Innovative Data Analytics Solution',
    content: `'Your team's data analytics dashboard has provided us with actionable insights into our operations. The real-time tracking and visualization capabilities have enabled us to make informed decisions for our global logistics business.'`,
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'COO, Global Logistics Inc.',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Efficient Microservices Architecture',
    content: `'We're thrilled with the microservices architecture you implemented. It has improved the scalability and maintainability of our enterprise systems, setting the stage for our future growth and innovation.'`,
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'CTO, Global Enterprises Ltd.',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Transformed Learning Experience',
    content:
      'The web application you developed for our online learning platform has transformed the learning experience for our students. The user-friendly interface and interactive features have received rave reviews from our users.',
    user: {
      id: 1,
      name: 'Ashley Graham',
      professional: 'CEO, EduConnect',
      photo: '5.jpg',
    },
  },
  // ... Add more testimonials following a similar structure
]
