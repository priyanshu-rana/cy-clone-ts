export type Student = {
  id: number;
  name: {
    title: string;
    first: string;
    last: string;
  };

  dob: {
    age: number;
    date: string;
  };

  phone: number;

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
