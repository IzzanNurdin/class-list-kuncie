export interface ClassDetail {
  id: string;
  name: string;
  mentors: Mentor[];
  description: string;
}

export interface ClassListObj {
  id: string;
  name: string;
}

export interface Mentor {
  id: string;
  name: string;
  description: string;
}
