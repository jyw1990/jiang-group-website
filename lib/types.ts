export interface NewsItem {
  id: string;
  date: string;
  text: string;
  image: string | null;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  email: string;
  photo: string;
  bio: string;
  website?: string;
}

export interface PostdocMember {
  id: string;
  name: string;
  email: string;
  photo: string;
  bio: string;
}

export interface PhDStudent {
  id: string;
  name: string;
  email: string;
  photo: string;
  bio: string;
}

export interface MastersStudent {
  id: string;
  name: string;
  department: string;
  email: string;
  photo: string;
}

export interface UndergradStudent {
  id: string;
  name: string;
  department: string;
  email: string;
  photo: string;
}

export interface HighSchoolStudent {
  id: string;
  name: string;
  school: string;
  photo: string;
}

export interface MembersData {
  faculty: FacultyMember[];
  postdocs: PostdocMember[];
  phd_students: PhDStudent[];
  masters_students: MastersStudent[];
  undergrad_students: UndergradStudent[];
  high_school_students: HighSchoolStudent[];
}

export interface AlumniMember {
  id: string;
  name: string;
  role: string;
  beginYear: number;
  exitYear: number;
  currentPosition?: string;
  photo: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  image: string;
  carouselImage: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  link?: string;
}

export interface PhotoItem {
  id: string;
  monthYear: string;
  caption: string;
  image: string;
}
