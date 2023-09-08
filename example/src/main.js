import Vue from 'vue';
import { Button, Select, Dialog, MessageBox, Loading, Message, Input } from 'element-ui';
import App from './App.vue';

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Select);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

new Vue({
  el: '#app',
  render: (h) => h(App)
});
