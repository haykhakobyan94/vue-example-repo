<i18n>
	{
		"en": {
			"title": "Newsletter subscription",
			"form": {
				"email": {
					"placeholder": "Enter your email",
					"error": {
						"required": "Email required field",
						"min": "The minimum number of characters is "
					}
				},
				"password": {
					"placeholder": "Enter your password",
					"error": {
						"required": "Password required field",
						"min": "The minimum number of characters is "
					}
				}
			},
			"submit": "Ok"
		},
		"ru": {
			"title": "Подписка на новостную рассылку",
			"form": {
				"email": {
					"placeholder": "Введите свой email",
					"error": {
						"required": "Email обязательное поле",
						"min": "Минимальное количество символов - "
					}
				},
				"password": {
					"placeholder": "Введите свой пароль",
					"error": {
						"required": "Password обязательное поле",
						"min": "Минимальное количество символов - "
					}
				}
			},
			"submit": "Ок"
		}
	}
</i18n>

<template>

    <el-dialog
        top="inherit"
        width="22.7rem"
        :visible="modalRememberPasswordShow"
        @close="toggleModalAnimate"
    >
        <div slot="title" class="el-dialog-header__title">Забыли пароль?</div>
        <div class="el-dialog__subtitle">Мы вышлем вам ссылку для восстановления пароля на ваш почтовый ящик</div>

        <div class="el-dialog__close">
            <svg-icon name="icon-close" width="1.6rem" height="1.6rem" />
        </div>

        <el-form
            ref="form"
            :model="form"
            :rules="rules"
            @submit.native.prevent="formSubmit"
        >
            <el-form-item class="el-form-item_not-bd" prop="email">
                <el-input
                    v-model="form.email"
                    :placeholder="$t('form.email.placeholder')"
                >
                    <el-button
                        slot="append"
                        class="el-input-group__append-inner"
                        native-type="submit"
                    >
                        <svg-icon name="arrow-right" width="1.375rem" height="1.375rem" />
                    </el-button>
                </el-input>
            </el-form-item>
        </el-form>

        <div slot="footer">
            <el-link type="primary" @click.prevent="toggleModalAnimate">Я вспомнил(а) пароль!</el-link>
        </div>
    </el-dialog>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
import UserRecoveryPassword from '@/models/users/RecoveryPassword'
export default {
    name: 'RememberPassword',
    data() {
        const validateEmail = (rule, value, callback) => {
            new UserRecoveryPassword()
                .params({ email: value })
                .get()
                .then((response) => {
                    callback()
                    this.toggleModalAnimate()
                })
                .catch((fail) => {
                    callback(new Error('Данный e-mail не зарегистрирован'))
                })
        }
        return {
            form: {
                email: ''
            },
            rules: {
                email: [
                    {
                        required: true,
                        min: 5,
                        message: 'Некорректный формат',
                        trigger: 'change'
                    },
                    {
                        required: true,
                        validator: validateEmail,
                        trigger: 'click'
                    }
                ]
            }
        }
    },
    computed: {
        ...mapState([
            'modalRememberPasswordShow'
        ])
    },
    methods: {
        ...mapMutations([
            'toggleModalRememberPassword'
        ]),

        toggleModalAnimate() {
            this.$refs.form.resetFields()
            this.toggleModalRememberPassword(false)
        },

        formSubmit() {
            this.$refs.form.validate()
        }
    }
}
</script>