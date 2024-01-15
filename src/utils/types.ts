export interface UserType {
  name: string;
  phone: string;
  email: string;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
