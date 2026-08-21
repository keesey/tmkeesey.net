export interface Person {
  name: {
    family: string;
    given: string;
  };
  tagline: string;
  website: string;
  email: string;
  address: {
    locality: string;
    region: string;
  };
}

export interface Experience {
  title: string;
  months: [string, string];
  organization?: string;
  location: string;
  responsibilities?: string[];
  technologies?: string[];
}

export interface ProjectComponent {
  name: string;
  url: string;
}

export interface Project {
  name: string;
  type: string;
  url: string;
  description: string;
  components: ProjectComponent[];
  technologies: string[];
  footnote?: string;
}

export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal?: string;
  volume?: number;
  issue?: number;
  pages?: number[];
  doi?: string;
  publisher?: string;
  pageCount?: number;
  isbn10?: string;
  isbn13?: string;
  asin?: string;
}

export interface Society {
  name: string;
  title: string;
  url: string;
}

export interface Education {
  organization: string;
  graduation: number;
  graduationQualifier: string;
  degree: string;
}

export interface Link {
  title: string;
  type: string;
  url: string;
}

export interface CV {
  person: Person;
  objective: string;
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  societies: Society[];
  education: Education[];
  links: Link[];
}
