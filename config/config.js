module.exports = {
    development: {
        db: 'mongodb://127.0.0.1/graphql',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: 'mongodb://<name>:<password>@ds127362.mlab.com:27362/grapnel',
        app: {
            name: 'graphql'
        },
        tokenSecret: 'hello'
    }
};