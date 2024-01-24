export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'tag',
            type: 'string',
            title: 'Tag',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                }
            ]
        }
    ]
}