/* eslint-disable object-shorthand */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import _ from 'lodash'
// import {Message} from 'element-ui';

const Alert = {

    install(Vue) {
        
        Vue.prototype.$alert = (() => {
            
            // const show = (options) => {

            //  options.message = options.text || options.message;

            //  return Message(_.merge({
            //      duration: 7000,
            //      customClass: 'ui-alert ' + (options.type ? 'ui-alert_' + options.type : ''),
            //      iconClass: 'ui-alert__icon',
            //      showClose: true,
            //      center: true,
            //      dangerouslyUseHTMLString: true,
            //      offset: -1,
            //      onClose() {}
            //  }, options));
            // };

            // return {
            //  show: show,
            //  info(message, options) {
            //      return show(_.merge(options, {
            //          message: message
            //      }));
            //  },
            //  error(message, options) {
            //      return show(_.merge(options, {
            //          type: 'error',
            //          message: message
            //      }));
            //  },
            //  success(message, options) {
            //      return show(_.merge(options, {
            //          type: 'success',
            //          message: message
            //      }));
            //  },
            //  close($message) {
            //      !$message || $message.close();
            //  },
            //  closeAll() {
            //      Message.closeAll()
            //  }
            // }
        })();
    }
};

export default (context) => {
    Vue.use(Alert);
}