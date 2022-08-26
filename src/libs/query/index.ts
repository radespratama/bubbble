const queryDynamicPosts = `
  *[_type == "post" && slug.current == $slug][0]{
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
  *[_type == "post"][0..5] | order(_createdAt asc){
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

const queryAllPosts = `
  *[_type == "post"] | order(_createdAt asc){
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
    'total': count(*[_type == "post"])
  }
`;

const queryCountPosts = `
  {
    total: count(*[_type == "post"])
  }
` 

const queryFetchSlug = `
  *[_type == "post"]{
    _id,
    slug {
      current
    },
  }
`;

export { queryDynamicPosts, queryFetchSlug, queryPosts, queryAllPosts, queryCountPosts };
