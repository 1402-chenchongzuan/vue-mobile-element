
vue 移动端组件
===

### 简述

###### 1.此组件为方便个人开发而制作
###### 2.css使用的sass，使用时需要依赖环境
```
 npm install node-sass --save-dev
 npm install sass-loader --save-dev
```
###### 3.使用的rem单位，需要在main.js引入flexible.js
###### 4.目前提供三种常用组件：Alert，Msg，Loading




### npm安装

```
npm install vue-mobile-element --save
```


### 引入
```
import {Alert,Loading,Msg} from 'vue-mobile-element';
 Vue.use(Loading);
 Vue.prototype.$alert=Alert;
 Vue.prototype.$loading=Loading.service;
 Vue.prototype.$msg=Msg;
```

#### Alert使用

```
this.$alert('该操作会删除信息','确定').then(()=>{    //只有确定按钮可以点击，点击后触发then里面的fn
        console.log('success')
      })


this.$alert('该操作会删除信息',['确定','取消']).then(()=>{  //有确定和取消按钮，点击后对应触发事件
            console.log('success')
        }).catch(()=>{
            console.log('cancel')
        })

```

#### Loading使用
######  loading可以this.$loading显示调用和`<loading></loading>`组件式调用

```
 this.$loading.show('请稍等'); //开启loading，如不填写内容，则使用`正在载入...`文字
 this.$loading.hide();  //关闭loading
```

```
<loading ref="loading" title="正在加载数据"></loading> //title=>loading等待的提示
  this.$refs.loading.show();
  this.$refs.loading.hide();
```

#### Msg使用

```
this.$msg.setShow(text,time);  //会自动关闭Msg,text必须填写,time为Msg显示的时间，默认1500毫秒
 this.$msg.show(text);     //不会自动关闭Msg，除非显示调用hide
 this.$msg.hide();         //关闭Msg
```

