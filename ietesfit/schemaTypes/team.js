export default {
    name: "team",
    type: "document",
    title: "Team",
    fields: [
      {
        name: "category",
        type: "string",
        title: "Category",
      },
      {
        name: 'categoryOrder',
        title: 'Category Order',
        type: 'number',
        description: 'Order of categories (lower numbers are higher priority)',
      },
      {
        name: "members",
        type: "array",
        title: "Members",
        of: [
          {
            type: "object",
            fields: [
              { name: "name", type: "string", title: "Name" },
              { name: "image", type: "image", title: "Image" },
            ],
          },
        ],
      },
    ],
  };
  