const Koa = require('koa')
const Router = require('koa-router')
const port = 8888

const app = new Koa()
const router = new Router()

const mockDB = {
    users: [
        {
            id: '0',
            name: 'Jim Porter'
        }, {
            id: '1',
            name: 'Mary Jones'
        }, {
            id: '2',
            name: 'Stacy Johnson'
        }, {
            id: '3',
            name: 'Chris Lee'
        }, {
            id: '4',
            name: 'Megan Lewis'
        }
    ]
}

router.get('/', (ctx, next) => {
    ctx.body = 'hello hello'
}).get('/users', (ctx, next) => {
    ctx.body = mockDB.users
}).get('/users/:id', (ctx, next) => {
    const user = mockDB
        .users
        .find(user => {
            return user.id == ctx.params.id
        })
    ctx.body = user
})

app.use(router.routes())

app.listen(port, () => {
    console.log('app listening to port ', port)
})