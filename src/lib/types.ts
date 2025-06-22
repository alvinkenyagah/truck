
export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  pay: number;
  type: 'Full-time' | 'Part-time' | 'Contract';
  route: string;
  description: string;
  isSaved: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
};
