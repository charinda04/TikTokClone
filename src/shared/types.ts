export interface PostType {
  id: string;
  videoUri: string;
  user: {
    id: string;
    username: string;
    imageUri: string;
  };
  description: string;
  songName: string;
  songImage: string;
  likes: number;
  comments: number;
  shares: number;
}
