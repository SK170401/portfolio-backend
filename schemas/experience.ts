export default {
    name: 'work_experience',
    type: 'document',
    title: 'Work experience',
    fields: [
        {
            name: 'company',
            type: 'string',
            title: 'Company',
        },

        {
            name: 'role',
            type: 'string',
            title: 'Role',
        },

        {
            name: 'working_period',
            type: 'array',
            title: 'Working Period',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}