import express from 'express'
import UsersControllers from '../controllers/users'
import authToken from '../middleware/authorisation'

const userRouter = express.Router()
const controller = new UsersControllers()

userRouter.get('/',authToken, controller.getUsers)
userRouter.get('/:id',authToken, controller.getUserById)
userRouter.post('/create', controller.createUser)
userRouter.put('/:id', authToken, controller.updateUser)
userRouter.delete('/:id', authToken, controller.deleteUser)

export default userRouter