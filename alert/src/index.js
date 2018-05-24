/**
 * Created by Administrator on 2018/4/20.
 */
import Vue from 'vue';
import alertVue from './alert.vue';


class Alert {
  constructor() {
    this.init();
  }
  init() {
    const AlertConstructor = Vue.extend(alertVue);
    this.instance = new AlertConstructor();
    document.body.appendChild(this.instance.$mount().$el);
  }

  _callback(resolve,reject){
    this.confirm =  ()=> {
      this.hide();
      resolve();
    };
    this.cancel =  ()=> {
      this.hide();
      this.cancelBtnText='';
      reject();
    };
  }

  _show(content) {
    let instance=this.instance;
    instance.content = content;
    instance.cancelBtnText = '';
    instance.show();
  }

  show(cotntent, options) {
    let instance = this.instance;
    if (!cotntent) return;
    this._show(cotntent);
    options = options || false;
    if (typeof options === 'string') {
      instance.confirmBtnText = options;
    }
    else if (options instanceof Array) {
      instance.confirmBtnText = options[0] || '确定';
      instance.cancelBtnText = options[1] || '';
    }
      if (typeof Promise !== 'undefined') {
     return new Promise((resolve, reject) => {
     this._callback.call(instance,resolve, reject);
     })
     }

  }

  static getInstance(cotntent, options) {
    if (!this.instance) {
      this.instance = new Alert();
    }
    return this.instance.show(cotntent, options);
  }
}




export default Alert.getInstance;
