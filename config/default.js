module.exports = {
  port: 3000,
  session: {
    secret: 'study-express-secret',
    key: 'study-express-secret',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/study-express'
}
