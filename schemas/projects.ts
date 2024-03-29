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
            title: 'Project URL',
            type: 'url',
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