import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, configure } from 'vee-validate';
import { required, email, min, max } from 'vee-validate/dist/rules';

// https://logaretm.github.io/vee-validate/guide/rules.html#importing-the-rules
extend('email', email);
extend('required', required);
extend('min', min);
extend('max', max);

ValidationProvider.options.props.tag.default = 'div';
Vue.component('FormField', ValidationProvider);

Vue.component('AppForm', ValidationObserver);

export default function({ app }) {
    configure({
        defaultMessage: (_, values) => {
            return app.i18n.t(`validation.${values._rule_}`, values);
        },
        mode: "eager"
    });
    // extend('required', {
    //     ...required,
    //     messages: {
    //         email: app.i18n.t('validation.required_email')
    //     }
    // });
}