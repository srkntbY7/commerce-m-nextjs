export interface IProductDescriptionContent {
  _id: string;
  contenttype: 'paragraph' | 'list';
  content: string[];
}

export interface IProductDescription {
  id: string;
  title: string;
  open: boolean;
  textcontent: IProductDescriptionContent[];
}
