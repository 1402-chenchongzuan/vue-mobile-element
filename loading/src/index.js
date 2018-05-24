
import Vue from 'vue';
import loadingVue from './loading.vue';
class Loading {
  constructor(){
    this.init();
  }
  init(){
    const LoadingConstructor=Vue.extend(loadingVue);
    this.instance=new LoadingConstructor();
    let instance=this.instance;
    instance.screen=true;
    instance.hide();
    document.body.appendChild(instance.$mount().$el);
  }

  _loading(options={}){
    switch (typeof options){
      case 'boolean':
        options?this.instance.show():this.instance.hide();
        break;
      case 'string':
        this.instance.show(options);
        break;
      default:
        break;
    }
  }

  show(text){
    this._loading(text||true);
  }
  hide(){
    this.instance.title='正在载入...';
    this._loading(false);
  }

  static getInstance(){
    if(!this.instance){
      this.instance=new Loading();
    }
    return this.instance;
  }
}



export default Loading.getInstance();



