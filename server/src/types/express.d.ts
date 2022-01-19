interface IUser {
  id: number;
  googleId: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
}

declare namespace Express {
  export interface Request {
    user: IUser;
  }
}
