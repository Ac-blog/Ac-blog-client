/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
import { Message } from 'iView'
import axios from 'axios' //引用axios
// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:7001',
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers['-Token'] = getToken()
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data //res is my own data
    if (res.code === 200) {
    // do somethings when response success
      return res.data
    } else {
      // if the custom code is not 200, it is judged as an error.
      // new Message().error({
      //   content: res.msg || 'Error',
      //   duration: 2 * 1000
      // })
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    // new Message().error({
    //   content: error.message,
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
