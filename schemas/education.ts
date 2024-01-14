export default {
    name: 'education',
    type: 'document',
    title: 'Education',
    fields: [
        {
            name: 'university',
            type: 'string',
            title: 'University',
        },

        {
            name: 'degree',
            type: 'string',
            title: 'Degree',
        },
        {
            name: 'passing',
            type: 'array',
            title: 'Passing',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}