export interface Product {
  id: string;
  title: string;
  urlProduct: string;
  videoID: string;
  price: number;
}

export interface Comment {
  id: string;
  username: string;
  comment: string;
  videoID: string;
  timestamp: string;
}

export interface Video {
  id: string;
  url: string;
  title: string;
}

export interface VideoReducer {
  data: Video | null;
  isLoading: boolean;
  error: string | null;
}
