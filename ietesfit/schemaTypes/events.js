export default {
    name: "event",
    title: "event",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Event Title",
        type: "string",
      },
      {
        name: "date",
        title: "Event Date",
        type: "string",
      },
      {
        name: "images",
        title: "Event Images",
        type: "array",
        of: [{ type: "image" }],
      },
      {
        name: "redirectUrl",
        title: "Redirect URL",
        type: "url",
      },
    ],
  };
  