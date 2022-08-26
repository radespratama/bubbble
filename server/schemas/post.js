export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error("A title of min. 10 characters is required"),
        Rule.max(60).warning("Shorter titles are usually better"),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "shortDescription",
      title: "Short description",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(7)
          .error("A title of min. 7 characters is required"),
        Rule.max(250).warning("Shorter description are usually better"),
      ],
    },
    {
      name: "templateUrl",
      title: "Template URL",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(7)
          .error("A title of min. 7 characters is required"),
        Rule.max(250).warning("Shorter description are usually better"),
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
