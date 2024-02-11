export default {
  name: 'leadStory',
  title: 'LeadStory',
  type: 'document',
  fields: [
    {
      name: 'story',
      title: 'Story',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'storyText',
              title: 'StoryText',
              type: 'string',
            },
            {
              name: 'storyPhoto',
              title: 'StoryPhoto',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
