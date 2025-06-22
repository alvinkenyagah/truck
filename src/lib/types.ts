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
