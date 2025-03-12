export default {
    name: "aboutUs",
    title: "About Us",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      },
    ],
  };
  