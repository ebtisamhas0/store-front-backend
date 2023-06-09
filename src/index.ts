import express from 'express'
import cors from 'cors'
import apiRouter from './routes'

const app = express()
const port = 3000

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRouter)

app.get('/', (_req: express.Request, res: express.Response) => {
    res.redirect('/api')
})

app.listen(port, () => {
    // eslint-disable-next-line no-undef
    console.log(`server started at localhost: ${port}`)
})

export default app