<i18n>
    {
        "en": {
            "title": "Newsletter subscription",
            "placeholder": "Enter your email"
        },
        "ru": {
            "title": "Подписка на новости",
            "placeholder": "Введите ваш e-mail",
            "success": "Проверьте ваш e-mail, мы выслали вам ссылку, <br>перейдя по которой, вы подтвердите свой e-mail!",
            "already_exists": "Вы уже подписаны..."
        }
    }
</i18n>

<template>
    <div class="subscription">
        <div class="subscription__title">Подписка на новости</div>
        <app-form class="form subscription__form">
            <form @submit.prevent="onSubmit" ref="form" class="mt-8">
                <form-field 
                    rules="required|email" 
                    v-slot="{ errors, failed, pristine }" 
                    class="form__field" 
                >
                    {{pristine}}
                    <div class="form-group" :class="{'form-group_error': failed}">
                        <input type="text" v-model="form.email" placeholder="Enter name" class="form__input form-group__inner" />
                        <span class="form-group__append">
                            <svg-icon name="arrow-right" width="1.375rem" height="1.375rem" />
                        </span>
                    </div>
                    <span v-if="errors" class="form__error">{{ _.head(errors) }}</span>
                </form-field>
            </form>
        </app-form>
    </div>
</template>

<script>
// import Subscription from '@/models/services/mailings/subscriptions'
export default {
    name: 'Subscription',
    data() {
        // const validateEmail = (rule, value, callback) => {
        //     new Subscription({ email: value })
        //         .save()
        //         .then((response) => {
        //             callback()
        //         })
        //         .catch((fail) => {
        //             const response = JSON.parse(fail.request.response)
        //             callback(new Error(response.message || response.email))
        //         })
        // }
        return {
            form: {
                email: '',
            }
        }
    },
    mounted() {

        console.log(this.$validator);
    },
    methods: {
        formSubmit() {
            this.$refs.form.validate()
        }
    }
}
</script>

<style lang="less">
    .subscription{

        &__title{
            color: @color-gray;
            font-size: rem(15);
            font-weight: 500;
        }
    }
</style>