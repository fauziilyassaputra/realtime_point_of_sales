export type AuthFormState = {
  status?: string;
  errors?: {
    name?: string[];
    password?: string[];
    role?: string[];
    email?: string[];
    avatar_url?: string[];
    _form?: string[];
  };
};

export type Profile = {
  id?: string;
  name?: string;
  avatar_url?: string;
  role?: string;
};
