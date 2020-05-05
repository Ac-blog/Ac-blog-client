import request from './request'

/**
 * 获取博客列表
 */
export const getList = (payload?: any) => {
  return request({
    url: '/client/v1/articles',
    method: 'get',
    params: { ...payload }
  })
}
