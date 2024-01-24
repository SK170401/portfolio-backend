export default {
    name: 'development',
    type: 'document',
    title: 'Development',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
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