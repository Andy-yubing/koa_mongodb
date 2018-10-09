const Router = require('koa-router')
const router = new Router({
	prefix: '/api'
})


// router.get('/', async (ctx, next) => {
// 	let val = null
// 	const data = await User.findOne({username: 'yidong'})
// 	console.log('data', data)
// 	const result = {
// 		code:200,
// 		response: data,
// 		ts: 12345
// 	}
// 	ctx.response.body = result
// 	return result
// })


router.get('/', async (ctx, next) => {
  ctx.body = "<div>Hello</div>"
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// module.exports = router
export default router

