//将URL与home内的vue去耦合，对所有URL统一管理
//大项目必备拆分
import {request} from "./request";

export function getHomeMultidata() {
    return request({
      url:'/home/multidata'
    })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}