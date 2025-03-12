export default {
    name: "eventslider",
    title: "Event Slider",
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
  