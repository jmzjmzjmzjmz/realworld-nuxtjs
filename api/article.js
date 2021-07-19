import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// 获取公共文章列表
export const getYourFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params,
    // headers: {
    //   // 添加用户身份，数据格式：Token空格Token数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDgxMTYsInVzZXJuYW1lIjoibHB6OTk5IiwiZXhwIjoxNTk3NzQxNTA4fQ.2yO8Fss4hYnvsIN2UYHsutQ1hmYqSSAA-UrIRnP4DOY`
    // }
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}


// 发表文章评论
export const addComments = (slug,data)=> {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

//删除文章评论

export const deleteComments = (slug,id)=> {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`,
  })
}

// 发布文章
export const createArticles = data => {
  return request({
    method: 'post',
    url: `/api/articles`,
    data
  })
}
// 更新文章
export const updateArticles = (slug,data) => {
  return request({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  })
}


// 删除文章
export const deleteArticles = (slug) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`,
  })
}

// follow
export const followUser = username => {
  return request({
    method: 'post',
    url: `/api/profiles/${username}/follow`,
  })
}

// unfollow
export const unFollowUser = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`,
  })
}

// getProfiles
export const getProfiles = username => {
  return request({
    method: 'get',
    url: `/api/profiles/${username}`,
  })
}


