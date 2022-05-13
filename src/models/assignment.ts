export type Assignment = {
  id: number;
  title: string;
  description: string;
  due_date: string;
  created_at: string;
  submissions: [{ submission_link: string }];
};
