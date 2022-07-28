import axios from 'axios'
const ins = axios.create({
    baseURL:'http://kumanxuan1.f3322.net:8001',
    timeout:5000
})
ins.interceptors.request.use(config=>{
    // console.log('我是请求拦截了');
        let token = localStorage.getItem('token');
        if(token){
            config.headers["X-Nideshop-Token"] = token;
        }
    return config
})
ins.interceptors.response.use(res=>{
    // console.log('我是响应拦截');
    return res
})
export default ins;

