const title = '积分管理系统'
const routers = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: title
    },
    component: (resolve) => require(['./views/index/index.vue'], resolve)
  },
  {
    path: '*',
    meta: {
      title: '访问出错啦'
    },
    component: (resolve) => require(['./views/errors/404.vue'], resolve)
  }
]
export default routers
