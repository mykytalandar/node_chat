export type Message = {
  user: string;
  text: string;
  createdAt: Date;
  id: string;
  type: 'user' | 'system';
};
