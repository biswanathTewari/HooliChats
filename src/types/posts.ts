export interface IPost {
  _id: string;
  caption: string;
  img: string;
  likes?: any[];
  username: string;
  createdAt: string;
  updatedAt: string;
  comments: any[];
}

export interface IPostReq {
  caption: string;
  img: string;
}
