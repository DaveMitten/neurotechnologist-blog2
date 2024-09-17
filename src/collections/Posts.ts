import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "excerpt",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
  ],
};
