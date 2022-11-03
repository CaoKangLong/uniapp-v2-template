import request from '@/lib/request'

export function testGetApi () {
  return request.get('/test/api')
}

export function testPostApi ({ name }) {
  return request.post('/test/post/api',{ name })
}