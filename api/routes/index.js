const router = require('express').Router()

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
//const topicRouter = require('./topic.router')
const practiceRouter = require('./practice.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/practice', practiceRouter)

module.exports = router