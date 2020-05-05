import request from './request'

/**
 * 获取博客列表
 */
interface GetList {
  page: number
}
export const getList = (payload?: GetList) => {
  return request({
    url: '/client/v1/articles',
    method: 'get',
    params: { ...payload }
  })
}

  /**
   * 获取博客文章详情
  */
 interface GetArticleDetail {
   articleId: string
 }
 export const getArticleDetail = (payload: GetArticleDetail) => {
  return request({
    url: `/client/v1/article/${payload.articleId}`,
    method: 'get',
  })
 }
