export default {
  name: "eventGallery",
  title: "Event Gallery",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Event Title",
      type: "string",
    },
    {
      name: "images",
      title: "Event Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "eventName",
              title: "Event Name",
              type: "string",
            },
            {
              name: "asset",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};
