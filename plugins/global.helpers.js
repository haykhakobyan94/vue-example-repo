/* eslint-disable object-shorthand */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { mapMutations } from 'vuex'
// Global components
import Popup from '@/components/ui/Popup'

const Helpers = {

    install(Vue) {

        Vue.mixin({
            methods: {

            }
        })
    }
}

const Body = {

    install(Vue) {
        
        Vue.prototype.$body = (() => {
            
            const $body = document.querySelector('.body');

            return {
                cut() {
                    $body.style.top = '-' + window.scrollY + 'px';
                    $body.setAttribute('data-cutted', true);
                },
                uncut() {
                    $body.setAttribute('data-cutted', false);
                    window.scrollTo(0, Math.abs(parseInt($body.style.top)));
                    $body.removeAttribute('style');
                }
            }
        })();
    }
};

export default (context) => {
    Vue.use(Helpers);
    Vue.use(Body);
}
