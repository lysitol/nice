import request from './require'
export const GetHomeList = () => request.get('/index/index')
export const  bandList = () => request.get('/index/index')
export const  getserchhishot = () => request.get('/search/index')
export const  searchlist = (params) => request.get('/search/helper',{params})
export const  zhuanti = (params) => request.get('/topic/list',{params})
export const  GetFenLeiLists = () => request.get('/catalog/index')
export const  GetFenLeiZiLei = (params) => request.get('/catalog/current',{params})
export const  denglu = (params) => request.post('/auth/loginByWeb',params)
export const  shangpin = (params) => request.get('/goods/list',{params})
export const  xiangqing = (params) => request.get('/goods/detail',{params})






//购物车
export const  getche = (headers) => request.get('/cart/index',{headers})
//加入购物车
export const  jiagou = (headers,params) => request.post('/cart/add',headers,params)


export const  goodschecked = (params) => request.post('/cart/checked',params)
//购物车选中

//品牌详细
export const  pinpai = (params) => request.get('/brand/detail',{params})


export const gcat = (params) => request.get('/goods/category',{params})
//步进器
export const bujinqi = (params) => request.post('/cart/update',params)
//删除商品
export const shanchu = (params) => request.post('/cart/delete',params)





