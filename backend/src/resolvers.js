const users = [
    { id: 1, name: 'Gisele', email: 'gisele@gmail.com' },
    { id: 2, name: 'João', email: 'joao@gmail.com' },

]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    },
}