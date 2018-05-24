
import Vue from 'vue';
import msgVue from './msg.vue';


class Msg {
  constructor(){
    this.init();
  }
  init(){
    const MsgConstructor=Vue.extend(msgVue);
    this.instance=new MsgConstructor();
    document.body.appendChild(this.instance.$mount().$el);
  }
  _msg(flag){
    let instance=this.instance;
    if(flag==null) return;
    flag?this._show.call(instance,flag):instance.hide();
  }
  _show(content){
    this.show();
    this.content=content;
  }
  show(content){
    this._msg(content);
  }
  hide(){
    this._msg(false);
  }
  setShow(content,time){
    let instance=this.instance;
    instance.content=content||'';
    instance.setShow(time);
  }
  static getInstance(){
    if(!this.instance){
      this.instance=new Msg();
    }
    return this.instance;
  }
}


export default Msg.getInstance();
