// �Ӱ���������vue
import Vue from 'vue'

// ����App������
import App from './App.vue'

Vue.config.productionTip = false

// ����һ��vueʵ��,�����ҵ���ҳ����Ǹ�div#app����
new Vue({
    // ����ʹ��es6д��
    // render: h => h(App),

    // ����ת��es5�������
    render: function (h) {
       // ������������render���յ����h�������������Ⱦ
       return h(App);
    }
}).$mount('#app');
