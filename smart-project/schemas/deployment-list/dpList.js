export default {
  name: 'deployment',
  title: 'Deployment',
  type: 'document',
  fields: [
    {
      name: 'soldier',
      title: 'Soldier',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'rank',
              title: 'Rank',
              type: 'string',
            },
            {
              name: 'salary',
              title: 'Salary',
              type: 'number',
            },
            {
              name: 'country',
              title: 'Country',
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
