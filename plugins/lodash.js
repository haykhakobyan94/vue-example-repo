import Vue from 'vue'
import _ from 'lodash'

export default (context) => {
    Vue.use({
        install(Vue) {
            Vue.prototype._ = _;
        }
    });
}