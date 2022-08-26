export interface DesignProps {
  _id?: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription?: string;
  templateUrl: string;
  publishedAt: () => void | string;
  author: {
    name: string;
    image: string;
  };
  categories: { [key: string]: any };
  mainImage: () => void | string;
  total?: number;
}
