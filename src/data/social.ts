import { SocialLink, NavItem } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/mattgilbert90',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Alquh',
    icon: 'github',
  },
  {
    name: 'Substack',
    url: 'https://beardedtester.substack.com/',
    icon: 'substack',
  },
];

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'Matt Gilbert',
  title: 'Senior Test Engineer II',
  tagline: 'Founder of ClearInsite.io & CoachingPortal.io',
  email: '', // Add your email if you want it displayed
  resumeUrl: '/static/Resume-Matt-Gilbert.pdf',
  headshotUrl: '/static/headshot.jpg',
  substackUrl: 'https://beardedtester.substack.com/',
  linkedinUrl: 'https://linkedin.com/in/mattgilbert90',
  projects: [
    {
      name: 'ClearInsite.io',
      url: 'https://clearinsite.io',
      description: 'AI-powered testing insights platform',
    },
    {
      name: 'CoachingPortal.io',
      url: 'https://coachingportal.io',
      description: 'Professional coaching and mentorship platform',
    },
  ],
};
