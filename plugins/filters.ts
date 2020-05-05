import Vue from 'vue'

const filters: any = {
  filterHTMLTag: (msg: string) => {
    msg = msg.replace(/<\/?[^>]*>/g, '') //去除 HTML Tag
    msg = msg.replace(/[|]*\n/, '') //去除行尾空格
    msg = msg.replace(/&npsp;/ig, '') //去掉 nbsp
    return msg
  }
}

Object.keys(filters).forEach(key => {
  console.log(filters)
  Vue.filter(key, filters[key])
})
