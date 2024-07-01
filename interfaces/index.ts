export type Book = {
  _id?: number | 0;
  id?: number | 0;
  title?: string | '';
  author?: string | '';
  description?: string | '';
  rating?: number | null;
  status?: string | '';
  imgUrl?: string | '';
  thumbnailUrl?: string | '';
  category?: string | '';
  publishedOn?: string | '';
}

export interface IGetAllAssets {
  type: string;
}