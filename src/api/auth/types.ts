import { UserVerifyStatus } from '@/types';

export interface ISignUp {
  email: string;
  name: string;
  password: string;
  guestId?: string;
}

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ILogoutRequest {
  refresh_token: string;
}

export interface IUserResponse {
  _id: string;
  name: string;
  email: string;
  date_of_birth: Date;
  password: string;
  created_at?: Date;
  updated_at?: Date;
  email_verify_token?: string;
  forgot_password_token?: string;
  verify: UserVerifyStatus;

  bio: string;
  location: string;
  website: string;
  username: string;
  avatar: string;
  cover_photo: string;
}

export interface IUpdateMeRequest {
  name?: string;
  date_of_birth?: string;
  bio?: string;
  location?: string;
  website?: string;
  username?: string;
  avatar?: string;
  cover_photo?: string;
  medias?: any;
}

export interface ISearchUserRequest {
  name: string;
}

export interface IFollowUserRequest {
  followed_user_id: string;
}

export interface UnFollowUser {
  followed_user_id: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  date_of_birth: Date;
  password: string;
  created_at: Date;
  updated_at: Date;
  email_verify_token?: string;
  forgot_password_token?: string;
  verify?: UserVerifyStatus;

  bio?: string;
  location?: string;
  website?: string;
  username?: string;
  avatar?: string;
  cover_photo?: string;
}

export interface ISignInResponse {
  message: string;
  user: IUser;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

export interface followerId {
  _id: string;
  user_id: string;
  followed_user_id: string;
  created_at: string;
}

export interface IGetFollowMeResponse {
  followerIds: Array<followerId>;
  followIds: Array<followerId>;
  followerInfo: Array<IUser>;
  followInfo: Array<IUser>;
}

export interface IGetMeResponse {
  message: string;
  user: IUser & IGetFollowMeResponse;
}
export interface IGetUSerResponse extends IGetMeResponse {}

export interface ILogoutResponse {
  message: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  date_of_birth: string;
}
export interface IRegisterResponse {
  message: string;
  access_token: string;
  refresh_token: string;
  user: {
    acknowledged: boolean;
    insertedId: string;
  };
}

export interface IUpdateMeResponse {
  message: string;
}

export interface IgetUserListResponse {
  message: string;
  users: Array<IUser>;
}

export interface IFollowUserResponse {
  message: string;
}

export interface IUnFollowUserRequest {
  followed_user_id: string;
}
export interface IUnFollowUserResponse {
  message: string;
}

