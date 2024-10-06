import { User } from 'src/apis/users/entities/user.entity';

export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IAuthServiceGetAccessToken {
  user: User;
}
