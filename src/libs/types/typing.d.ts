export interface FeaturedProps {
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
  categories: [title: string];
  mainImage: () => void | string;
}
