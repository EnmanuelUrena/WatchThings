import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json('Hello World')
})

app.post('/login', (c) => {
  const { username, password } = c.body
  username && password ? console.log('login') : console.log('Missing fields')
  return c.json('login')
})

export default app
