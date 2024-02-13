export type Book = {
  _id: number;
  title: string;
  isbn: string;
};

export type BookDetailsType = {
  _id: number;
  title: string;
  isbn: string;
  pageCount: number;
  thumbnailUrl: string;
  longDescription: string;
};
