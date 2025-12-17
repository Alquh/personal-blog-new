export interface Experience {
  id: string;
  title: string;
  period: string;
  description: string;
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
