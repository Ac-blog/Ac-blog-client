import Vue from 'vue'

const filters: any = {

}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
