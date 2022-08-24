const queryDynamicPosts = `
  *[_type == "post" && slug.current == $slug]{
    _id,
    title,
    slug {
      current
    },
    shortDescription,
    templateUrl,
    publishedAt,
    author -> {
      name,
      image
    },
    categories[] -> { title },
    mainImage,
  }
`;

const queryPosts = `
  *[_type == "post"][0..5]{
    _id,
    title,
    slug {
      current
    },
    author -> {
      name,
      image
    },
    categories[] -> { title },
    mainImage,
  }
`;

const queryFetchSlug = `
  *[_type == "post"]{
    _id,
    slug {
      current
    },
  }
`;

export { queryDynamicPosts, queryFetchSlug, queryPosts };
