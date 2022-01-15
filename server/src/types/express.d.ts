interface IUser {
  id: number;
  googleId: string;
  displayName: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

declare namespace Express {
  export interface Request {
    user: IUser;
  }
}
