/**
 * Created by Administrator on 2018/4/19.
 */
import Loading from './src/loading.vue';
import service from './src';

export default {
  install(Vue){
     Vue.component(Loading.name,Loading)
  },
  service
}
